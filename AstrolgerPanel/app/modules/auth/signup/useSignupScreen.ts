import { useFormik } from 'formik';
import { useState } from 'react';
import {
  Devices,
  Routes,
  ScreenString,
  SignupSchema,
} from '../../../constants';
import { DeviceType } from '../../../types';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useSignupScreen = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [selectedGender, setSelectedGender] = useState<string>('');
  const [error, setError] = useState<string>('');
  const [isDevicesVisible, setIsDevicesVisible] = useState<boolean>(false);
  const [device, setDevice] = useState<DeviceType[]>(Devices);
  const [isSelection, setIsSelection] = useState<boolean>(false);
  const [system, setSystem] = useState<string>('');
  const [isCheck, setIsCheck] = useState<boolean>(false);
  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      experience: '',
      city: '',
      country: '',
      systemKnown: '',
      language: '',
      bio: '',
    },
    validationSchema: SignupSchema,
    onSubmit: () => {},
  });
  const handleGender = (gender: string) => {
    setSelectedGender(gender);
    setIsVisible(false);
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

  const toggleModalVisibility = (name: string) => {
    setIsDevicesVisible(true);
    setSystem(name);
  };

  const validateGender = () => {
    if (selectedGender === '') {
      return setError(ScreenString.errorGender);
    }
    return true;
  };

  const cancelSelection = () => {
    setIsDevicesVisible(false);
  };

  const setSelection = () => {
    setIsDevicesVisible(false);
    setDevice(device);
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
    toggleDeviceSelection,
    cancelSelection,
    setSelection,
    system,
    toggleModalVisibility,
    navigateLogin,
    isCheck,
    setIsCheck
  };
};

export default useSignupScreen;
