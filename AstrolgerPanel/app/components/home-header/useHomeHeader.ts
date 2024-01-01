import { useEffect, useState } from 'react';
import { logOut, useAppDispatch, useAppSelector } from '../../redux';
import { CommonActions } from '@react-navigation/native';
import { Routes } from '../../constants';
import { useNavigation } from '@react-navigation/native';

const useHomeHeader = () => {
  const navigation = useNavigation();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(state => state.signin);
  useEffect(() => {}, [isSuccess]);

  const signOut = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.AuthStack}],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  return {
    isModalVisible,
    setIsModalVisible,
    dispatch,
    signOut,
  };
};

export default useHomeHeader;
