import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useRef, useState } from 'react';
import { Alert, Linking, ToastAndroid } from 'react-native';
import {
  check,
  PERMISSIONS,
  requestMultiple,
  RESULTS,
} from 'react-native-permissions';
import { Routes, ScreenString } from '../../constants';
import {
  fetchCallAvaibility,
  useAppDispatch,
  useAppSelector,
  liveStream,
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
  const [slider, setSlider] = useState<Status>({
    chat: false,
    call: false,
    videoChat: false,
    freeChat: false,
  });
  const [toggle, setToggle] = useState<boolean>(false);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const [operation, setOperation] = useState<string>('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { id } = loggedInUser;
  const { callAvaibility, isLoading, error, isError } = useAppSelector(
    state => state.availableForCallReducer,
  );
  const { isloading: liveStreamLoader, isSuccess } = useAppSelector(
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

  const toggleStatus = (operation: string) => {
    operation === 'chat' && setSlider({ ...slider, chat: !slider.chat });
    operation === 'call' && setSlider({ ...slider, call: !slider.call });
    operation === 'videoChat' &&
      setSlider({ ...slider, videoChat: !slider.videoChat });
    operation === 'freeChat' &&
      setSlider({ ...slider, freeChat: !slider.freeChat });
    setIsModalVisible(false);
  };

  const toggleVisibility = (operation: string) => {
    setIsModalVisible(true);
    setOperation(operation);
  };

  const navigateToEarningDetails = () => {
    navigation.navigate(Routes.EarningDetails);
  };

  const goLive = async (status: string) => {
    try {
      const result = await check(PERMISSIONS.ANDROID.CAMERA);
      if (result === RESULTS.GRANTED) {
        return dispatch(
          liveStream({
            astro_id: id,
            status,
          }),
        );
      }
      ToastAndroid.show(ScreenString.permissionRequired, ToastAndroid.SHORT);
    } catch (error) {}
  };

  const toggleCallAvaibility = (call: string) => {
    !isError && setToggle(!toggle);
    setIsModalVisible(false);
    dispatch(fetchCallAvaibility({ id, call }));
  };

  return {
    slider,
    setSlider,
    toggleStatus,
    isModalVisible,
    setIsModalVisible,
    toggleVisibility,
    operation,
    navigateToEarningDetails,
    goLive,
    toggleCallAvaibility,
    toggle,
    callAvaibility,
    isLoading,
    error,
    isError,
    liveStreamLoader,
  };
};

export default useHomePage;
