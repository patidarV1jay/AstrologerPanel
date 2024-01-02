import { useEffect, useState } from 'react';
import { logOut, useAppDispatch, useAppSelector } from '../../redux';
import { CommonActions, ParamListBase } from '@react-navigation/native';
import { Routes } from '../../constants';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useHomeHeader = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(state => state.signin);
  useEffect(() => {}, [isSuccess]);

  const signOut = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.AuthStack }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  const navigateToUpdateProfile = () => {
    navigation.navigate(Routes.UpdateProfile)
  };
  return {
    isModalVisible,
    setIsModalVisible,
    dispatch,
    signOut,
    navigateToUpdateProfile,
  };
};

export default useHomeHeader;
