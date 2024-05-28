import { useRoute } from '@react-navigation/native';
import { closeChat, useAppDispatch, useAppSelector } from '../../redux';
import { BackHandler, Alert } from 'react-native';
import { useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Routes } from '../../constants';
import database from '@react-native-firebase/database';

interface RouteType {
  data: {
    [key: string]: string;
  };
}

const useChatScreen = () => {
  const route = useRoute();
  const dispatch = useAppDispatch();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { data } = route?.params as RouteType;
  const navigation = useNavigation();
  useEffect(() => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Are you sure you want to go back?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {
          text: 'YES',
          onPress: async() => {
            await database().ref(`/${data?.roomId}/`).remove(); 
            dispatch(closeChat(data?.roomId));
            navigation.goBack();
          },
        },
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  }, []);
  const { id: astroId } = loggedInUser;
  return {
    data,
    astroId,
  };
};

export default useChatScreen;
