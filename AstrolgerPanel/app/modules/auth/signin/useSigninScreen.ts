import { useFormik } from 'formik';
import { SigninSchema } from '../../../constants';

const useSigninScreen = () => {
  const formik = useFormik({
    validationSchema : SigninSchema,
    initialValues:{
        email:'',
        password: ''
    },
    onSubmit : () =>{

    }
  })

  return{
    formik
  }

};

export default useSigninScreen;
