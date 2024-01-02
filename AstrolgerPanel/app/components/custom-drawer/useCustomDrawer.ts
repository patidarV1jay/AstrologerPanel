import {
  CommonActions,
  ParamListBase,
  useNavigation,
} from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Routes } from '../../constants';
import { logOut, useAppDispatch } from '../../redux';

const useCustomDrawer = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const signOut = () => {
    const resetAction = CommonActions.reset({
      index: 0,
      routes: [{ name: Routes.AuthStack }],
    });
    navigation.dispatch(resetAction);
    dispatch(logOut());
  };

  return {
    navigation,
    signOut,
  };
};

export default useCustomDrawer;
