import { useFormik } from 'formik';
import { Routes, SigninSchema } from '../../../constants';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

const useSigninScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const navigateSignup = () => {
    navigation.navigate(Routes.Signup);
  };

  const formik = useFormik({
    validationSchema: SigninSchema,
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: () => {},
  });

  return {
    formik,
    navigateSignup
  };
};

export default useSigninScreen;
