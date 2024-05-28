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
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        setAppState(appState.current);
      } else if (appState.current.match(/background/)) {
        setAppState(appState.current);
      }
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);
  const dispatch = useAppDispatch();
  const { userID, userName, liveID } = route?.params as RouteType;

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
          onPress: () => {
            dispatch(stopLiveStreamCall({ userID, liveID }));
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
