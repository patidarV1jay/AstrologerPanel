import { DrawerNavigationProp } from '@react-navigation/drawer';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { Routes } from '../../constants';
import { useAppDispatch } from '../../redux';

const useHomeHeader = () => {
  const navigation = useNavigation<DrawerNavigationProp<ParamListBase>>();
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const navigateToUpdateProfile = () => {
    navigation.navigate(Routes.UpdateProfile);
  };
  return {
    isModalVisible,
    setIsModalVisible,
    dispatch,

    navigateToUpdateProfile,
    navigation,
  };
};

export default useHomeHeader;
