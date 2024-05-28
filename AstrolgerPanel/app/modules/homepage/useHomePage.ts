import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Alert, Linking, ToastAndroid } from 'react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { Routes, ScreenString } from '../../constants';
import {
  fetchCallAvaibility,
  fetchChatAvailability,
  getEarnings,
  resetAvailableError,
  toggleChatReducer,
  toggleReducer,
  useAppDispatch,
  useAppSelector,
} from '../../redux';

type permissions = (
  | 'android.permission.CALL_PHONE'
  | 'android.permission.CAMERA'
  | 'android.permission.RECORD_AUDIO'
)[];

const useHomePage = () => {
  const [input, setInput] = useState<string>('');
  const [chat, setChat] = useState<boolean>(false);
  const [feature, setfeature] = useState<string>('');
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { id, slug, name, experience } = loggedInUser;
  const { callAvaibility, isLoading, error, isError, toggle } = useAppSelector(
    state => state.availableForCallReducer,
  );
  const {
    chatAvaibility,
    isLoading: chatLoader,
    error: chatError,
    isError: isChatError,
    toggleChat,
  } = useAppSelector(state => state.availableForChatReducer);
  const { isloading: liveStreamLoader, isChat } = useAppSelector(
    state => state.LiveStreamReducer,
  );
  if (error !== '') {
    Alert.alert(ScreenString.permissionRequired, error, [
      {
        text: ScreenString.ok,
        onPress: () => dispatch(resetAvailableError()),
      },
    ]);
  }

  const onJoinPress = (isHost: boolean) => {
    navigation.navigate(isHost ? Routes.HostScreen : 'Audience', {
      userID: id,
      userName: name,
      liveID: slug,
    });
  };

  const requestPermissions = async (permissions: permissions) => {
    const status = await requestMultiple(permissions);
    if (
      status[PERMISSIONS.ANDROID.CAMERA] === 'granted' &&
      status[PERMISSIONS.ANDROID.RECORD_AUDIO] === 'granted' &&
      status[PERMISSIONS.ANDROID.CALL_PHONE] === 'granted'
    )
      return;
    else {
      Alert.alert(ScreenString.error, ScreenString.notUpdateAvaibility, [
        {
          text: ScreenString.settings,
          onPress: () => Linking.openSettings(),
        },
        {
          text: ScreenString.later,
        },
      ]);
    }
  };
  const toggleCallAvaibility = async (call: string) => {
    !isError && dispatch(toggleReducer());
    setIsModalVisible(false);
    dispatch(fetchCallAvaibility({ id, call }));
  };
  const toggleChatAvaibility = (chat: string) => {
    !isError && dispatch(toggleChatReducer());
    setIsModalVisible(false);
    dispatch(fetchChatAvailability({ id, chat }));
  };

  useEffect(() => {
    requestPermissions([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.CALL_PHONE,
    ]);
    dispatch(getEarnings(id));
  }, []);
  const handleFeedback = (text: string) => {
    setInput(text);
  };

  const handleSend = () => {
    if (input.trim() !== '') {
      setInput('');
      return ToastAndroid.show('Thanks For Your Feedback', ToastAndroid.SHORT);
    }
    return ToastAndroid.show('Please Enter Your Feedback', ToastAndroid.SHORT);
  };

  return {
    setIsModalVisible,
    isModalVisible,
    toggleCallAvaibility,
    toggle,
    callAvaibility,
    isLoading,
    isError,
    liveStreamLoader,
    onJoinPress,
    handleFeedback,
    handleSend,
    input,
    chat,
    feature,
    setfeature,
    toggleChatAvaibility,
    chatAvaibility,
    chatLoader,
    toggleChat,
    experience,
  };
};

export default useHomePage;
