import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { chatModalReducer, notificatonReducer, store } from '../redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const requestUserPermission = async () => {
  const authStatus = await messaging().requestPermission();
  const enabled =
    authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
    authStatus === messaging.AuthorizationStatus.PROVISIONAL;
  console.log(enabled);
  if (enabled) {
    getFcmToken();
  }
};

export const getFcmToken = async () => {
  let fcmToken = await AsyncStorage.getItem('fcmToken');
  console.log(fcmToken,'getok');
  if (!fcmToken) {
  try {
    const fcmToken = await messaging().getToken();
    console.log(fcmToken, 'token noti');
    await AsyncStorage.setItem('fcmToken', fcmToken); 
  } catch (error) {
    console.log(error)
    return error; 

  }  
  }
};

export const notificationListener = async () => {
  messaging().onNotificationOpenedApp(remoteMessage => {
    store.dispatch(chatModalReducer(true));
  });

  messaging().onMessage(async remoteMessage => {
    console.log(remoteMessage.data, 'rm');
    store.dispatch(chatModalReducer(true));
    store.dispatch(notificatonReducer(remoteMessage.data));
  });

  messaging()
    .getInitialNotification()
    .then(remoteMessage => {
      if (remoteMessage) {
        store.dispatch(chatModalReducer(true));
        // navigationWithParam(
        //   Routes.Stack,
        //   { screen: Routes.NotificationScreen },
        //   '',
        // );
        // Alert.alert(JSON.stringify(remoteMessage));
      }
    });
};
