import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { Alert, Linking, ToastAndroid } from 'react-native';
import { PERMISSIONS, requestMultiple } from 'react-native-permissions';
import { Routes, ScreenString } from '../../constants';
import {
  fetchCallAvaibility,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { resetAvailableError } from '../../redux';

interface Status {
  chat: boolean;
  call: boolean;
  videoChat: boolean;
  freeChat: boolean;
}

type permissions = (
  | 'android.permission.CALL_PHONE'
  | 'android.permission.CAMERA'
  | 'android.permission.RECORD_AUDIO'
)[];

const useHomePage = () => {
  const [toggle, setToggle] = useState<boolean>(false);
  const [input, setInput] = useState<string>('');
  const [chat, setChat] = useState(false);
  const [videoCall, setVideoCall] = useState(false);
  const [freeCall, setFreeCall] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { id, slug, name } = loggedInUser;
  const { callAvaibility, isLoading, error, isError } = useAppSelector(
    state => state.availableForCallReducer,
  );
  const { isloading: liveStreamLoader, isChat } = useAppSelector(
    state => state.LiveStreamReducer,
  );
  if (error !== '') {
    Alert.alert(ScreenString.permissionRequired, ScreenString.settingPath, [
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

  useEffect(() => {
    requestPermissions([
      PERMISSIONS.ANDROID.CAMERA,
      PERMISSIONS.ANDROID.RECORD_AUDIO,
      PERMISSIONS.ANDROID.CALL_PHONE,
    ]);
  }, []);

  const toggleCallAvaibility = (call: string) => {
    !isError && setToggle(!toggle);
    setIsModalVisible(false);
    dispatch(fetchCallAvaibility({ id, call }));
  };
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

  // useEffect(() => {
  //   database()
  //     .ref('/chatList')
  //     .once('value')
  //     .then(snapshot => {
  //       console.log('User data: ', snapshot.val());
  //     });
  //   let tempData = [];
  //   firestore()
  //     .collection('users')
  //     .where('mobile', '!=', '9799104489')
  //     .get()
  //     .then(res => {
  //       console.log(JSON.stringify(res.docs[0].data()));
  //       res.docs.map(item => {
  //         tempData.push(item.data());
  //       });
  //       console.log(tempData, 'tem');
  //     });
  // }, []);

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
    setChat,
    videoCall,
    setVideoCall,
    freeCall,
    setFreeCall,
    isChat,
  };
};

export default useHomePage;
