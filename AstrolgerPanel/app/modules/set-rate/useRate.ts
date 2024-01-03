import { useEffect, useState } from 'react';
import { RateSchmea } from '../../constants';
import { useFormik } from 'formik';

const useRate = () => {
  const [isRateDropDown, setIsRateDropDown] = useState<string>('');
  const [isDropDown, setIsDropDown] = useState<boolean>(false);
  const [isLiveAudioDropDown, setIsLiveAudioDropDown] =
    useState<boolean>(false);
  const [isLiveVideoDropDown, setIsLiveVideoDropDown] =
    useState<boolean>(false);
  const [value, setValue] = useState<number>(0);

  const formikForPrivateChat = useFormik({
    initialValues: {
      rate: 0,
      discount: 0,
    },
    validationSchema: RateSchmea,
    onSubmit: () => {},
  });

  const formikForLiveAudio = useFormik({
    initialValues: {
      rate: 0,
      discount: 0,
    },
    validationSchema: RateSchmea,
    onSubmit: () => {},
  });

  const formikForLiveVideo = useFormik({
    initialValues: {
      rate: 0,
      discount: 0,
    },
    validationSchema: RateSchmea,
    onSubmit: () => {},
  });
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
    value,
    formikForLiveAudio,
    formikForLiveVideo,
  };
};

export default useRate;
