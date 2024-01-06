import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useFormik } from 'formik';
import { useEffect } from 'react';
import { Keyboard, ToastAndroid } from 'react-native';
import { Routes, SigninSchema } from '../../../constants';
import {
  authUser,
  resetError,
  useAppDispatch,
  useAppSelector,
} from '../../../redux';

const useSigninScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const { isSuccess, isloading, loggedInUser, error } = useAppSelector(
    state => state.signin,
  );

  useEffect(() => {
    if (error) {
      ToastAndroid.show(error, ToastAndroid.SHORT);
      dispatch(resetError());
    }
  }, [error]);

  const navigateSignup = () => {
    navigation.navigate(Routes.Signup);
  };

  useEffect(() => {
    isSuccess &&
      navigation.replace(Routes.HomeStack, { screen: Routes.HomeScreen });
  }, [isSuccess]);

  const formik = useFormik({
    validationSchema: SigninSchema,
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: async values => {
      Keyboard.dismiss();
      dispatch(authUser(values));
    },
  });

  return {
    formik,
    navigateSignup,
    isloading,
    error,
  };
};

export default useSigninScreen;
