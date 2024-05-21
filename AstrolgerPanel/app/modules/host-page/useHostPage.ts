import { useEffect, useRef, useState } from 'react';
import { stopLiveStreamCall, useAppSelector } from '../../redux';
import { Alert, AppState, BackHandler } from 'react-native';
import { useAppDispatch } from '../../redux';
import {
  ParamListBase,
  useNavigation,
  useRoute,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';

export interface RouteType {
  userID: string;
  userName: string;
  liveID: string;
}

const useHostPage = () => {
  const { loggedInUser } = useAppSelector(state => state.signin);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const appState = useRef(AppState.currentState);
  const [currentAppState, setAppState] = useState(appState.current);
  const route = useRoute();
  console.log(route.name);
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        console.log('App has come to the foreground!');
        setAppState(appState.current);
      } else if (appState.current.match(/background/)) {
        console.log('App has come to the background!');
        setAppState(appState.current);
      }
      appState.current = nextAppState;
      console.log('AppState', appState.current);
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const dispatch = useAppDispatch();
  const { userID, userName, liveID } = route?.params as RouteType;

  useEffect(() => {
    if (route.name === 'HostScreen') {
      const backAction = () => {
        Alert.alert('Hold on!', 'You are about to exit live stream?', [
          {
            text: 'Cancel',
            onPress: () => null,
            style: 'cancel',
          },
          {
            text: 'YES',
            onPress: () => {
              dispatch(stopLiveStreamCall({ userID, liveID }));
              navigation.navigate(Routes.HomeScreen);
            },
          },
        ]);
        return true;
      };
      const backhandler = BackHandler.addEventListener(
        'hardwareBackPress',
        backAction,
      );
    }
  }, []);

  return {
    loggedInUser,
    dispatch,
    userID,
    userName,
    liveID,
    navigation,
  };
};

export default useHostPage;
