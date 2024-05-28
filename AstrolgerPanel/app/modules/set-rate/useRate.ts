import { useFormik } from 'formik';
import { useEffect, useState } from 'react';
import { RateSchmea } from '../../constants';
import {
  resetSuccess,
  setcallCharges,
  useAppDispatch,
  useAppSelector,
} from '../../redux';
import { ToastAndroid } from 'react-native';

const useRate = () => {
  const [isRateDropDown, setIsRateDropDown] = useState<string>('');
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isLiveAudioDropDown, setIsLiveAudioDropDown] =
    useState<boolean>(false);
  const [isLiveVideoDropDown, setIsLiveVideoDropDown] =
    useState<boolean>(false);
  const dispatch = useAppDispatch();
  const { loggedInUser } = useAppSelector(state => state.signin);
  const { callCharges, isSuccess } = useAppSelector(
    state => state.SetCallChargesReducer,
  );

  useEffect(() => {
    if (isSuccess) {
      ToastAndroid.show('Price has been updated', ToastAndroid.SHORT);
      dispatch(resetSuccess());
    }
  }, [isSuccess]);

  const formikForPrivateChat = useFormik({
    initialValues: {
      rate: '',
      discount: '',
    },
    validationSchema: RateSchmea,
    onSubmit: values => {
      const { rate, discount } = values;
      const discountedPrice =
        Number(rate) - (Number(rate) * Number(discount)) / 100;
      if (discountedPrice === 0) {
        return ToastAndroid.show(
          'Discounted Price should be greater than zero',
          ToastAndroid.SHORT,
        );
      }
      dispatch(
        setcallCharges({
          astro_id: loggedInUser?.id,
          call_price: discountedPrice,
          rate,
          discount,
        }),
      );
    },
  });

  const formikForLiveAudio = useFormik({
    initialValues: {
      rate: '',
      discount: '',
    },
    validationSchema: RateSchmea,
    onSubmit: () => {},
  });

  const formikForLiveVideo = useFormik({
    initialValues: {
      rate: '',
      discount: '',
    },
    validationSchema: RateSchmea,
    onSubmit: () => {},
  });

  useEffect(() => {
    formikForPrivateChat.setValues({
      rate: callCharges?.rate,
      discount: callCharges?.discount,
    });
  }, []);

  const toggleDropDown = (name: string) => {
    switch (name) {
      case 'Private Call':
        setIsRateDropDown(name);
        setIsDropDown(!isDropDown);
        setIsLiveVideoDropDown(false);
        setIsLiveAudioDropDown(false);
        break;

      case 'Live Video Call':
        setIsRateDropDown(name);
        setIsLiveVideoDropDown(!isLiveVideoDropDown);
        setIsDropDown(false);
        setIsLiveAudioDropDown(false);
        break;

      case 'Live Audio Call':
        setIsRateDropDown(name);
        setIsLiveVideoDropDown(false);
        setIsDropDown(false);
        setIsLiveAudioDropDown(!isLiveAudioDropDown);
        break;

      default:
        break;
    }
  };

  return {
    isRateDropDown,
    toggleDropDown,
    isDropDown,
    isLiveVideoDropDown,
    isLiveAudioDropDown,
    formikForPrivateChat,
    formikForLiveAudio,
    formikForLiveVideo,
  };
};

export default useRate;
