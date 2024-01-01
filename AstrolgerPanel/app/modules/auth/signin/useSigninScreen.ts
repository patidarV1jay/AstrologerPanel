import { useFormik } from 'formik';
import { Routes, SigninSchema } from '../../../constants';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { login, useAppDispatch, useAppSelector } from '../../../redux';
import { useEffect } from 'react';

const useSigninScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const dispatch = useAppDispatch();
  const { isSuccess } = useAppSelector(state => state.signin);

  const navigateSignup = () => {
    navigation.navigate(Routes.Signup);
  };

  useEffect(() => {
    isSuccess &&
      navigation.navigate(Routes.HomeStack, { screen: Routes.HomeScreen });
  }, [isSuccess]);

  const formik = useFormik({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {
      dispatch(login());
    },
  });

  return {
    formik,
    navigateSignup,
  };
};

export default useSigninScreen;
