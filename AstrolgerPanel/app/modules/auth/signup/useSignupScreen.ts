import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { ToastAndroid } from 'react-native';
import {
  Devices,
  Language,
  Routes,
  ScreenString,
  SignupSchema,
} from '../../../constants';
import {
  registerUser,
  registraionSuccess,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';
import { DeviceType } from '../../../types';

const useSignupScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isDevicesVisible, setIsDevicesVisible] = useState<boolean>(false);
  const [device, setDevice] = useState<DeviceType[]>(Devices);
  const [language, setLanguage] = useState<DeviceType[]>(Language);
  const [selectedDevices, setSelectedDevices] = useState<string[]>();
  const [languageSelected, setLanguageSelected] = useState<string[]>();
  const [system, setSystem] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);

  const dispatch = useAppDispatch();
  const { isSuccess, isLoading } = useAppSelector(state => state.signup);
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  useEffect(() => {
    if (isSuccess) {
      ToastAndroid.show('Registeration Successful', ToastAndroid.SHORT);
      dispatch(registraionSuccess());
    }
  }, [isSuccess]);

  const validateGender = () => {
    if (selectedGender === '') {
      return ToastAndroid.show(ScreenString.errorGender, ToastAndroid.SHORT);
    } else if (selectedDevices?.length === undefined) {
      return ToastAndroid.show(
        ScreenString.systemKnownError,
        ToastAndroid.SHORT,
      );
    } else if (languageSelected?.length === undefined) {
      return ToastAndroid.show(ScreenString.languageError, ToastAndroid.SHORT);
    } else if (!isCheck) {
      return ToastAndroid.show(ScreenString.acceptTerms, ToastAndroid.SHORT);
    }

    return true;
  };

  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      experience: '',
      city: '',
      country: '',
      bio: '',
    },
    validationSchema: SignupSchema,
    onSubmit: values => {
      if (validateGender()) {
        const payload = {
          ...values,
          selectedDevices,
          selectedGender,
          languageSelected,
        };
        dispatch(registerUser(payload));
      }
    },
  });

  const handleGender = (gender: string) => {
    setSelectedGender(gender);
    setIsVisible(false);
    setError('');
  };

  const toggleDeviceSelection = (id: number) => {
    setDevice(
      device.map(value =>
        value.id === id
          ? { ...value, isSelected: !value.isSelected }
          : { ...value },
      ),
    );
  };

  const toggleLanguageSelection = (id: number) => {
    setLanguage(
      language.map(value =>
        value.id === id
          ? { ...value, isSelected: !value.isSelected }
          : { ...value },
      ),
    );
  };

  const toggleModalVisibility = (name: string) => {
    setIsDevicesVisible(true);
    setSystem(name);
  };

  const cancelSelection = (system: string) => {
    system === 'system' && setDevice(Devices);
    system === 'language' && setLanguage(Language);
  };

  const setSelection = (system: string) => {
    setIsDevicesVisible(false);
    system === 'system' &&
      setSelectedDevices(
        device
          .filter(value => value.isSelected === true)
          .map(item => item.device),
      );
    system === 'language' &&
      setLanguageSelected(
        language
          .filter(value => value.isSelected === true)
          .map(item => item.device),
      );
  };

  const navigateLogin = () => {
    navigation.navigate(Routes.Signin);
  };

  return {
    formik,
    isVisible,
    toggleVisibility,
    selectedGender,
    setSelectedGender,
    handleGender,
    isDevicesVisible,
    setIsDevicesVisible,
    device,
    language,
    toggleDeviceSelection,
    cancelSelection,
    setSelection,
    system,
    toggleModalVisibility,
    navigateLogin,
    isCheck,
    setIsCheck,
    selectedDevices,
    toggleLanguageSelection,
    languageSelected,
    error,
    isLoading,
  };
};

export default useSignupScreen;
