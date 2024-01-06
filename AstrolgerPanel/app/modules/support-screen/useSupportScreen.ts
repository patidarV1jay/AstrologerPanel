import { useState } from 'react';
import { Keyboard, ToastAndroid } from 'react-native';

const useSupportScreen = () => {
  const [subject, setSubject] = useState<string>('');
  const [concern, setConcern] = useState<string>('');

  const validate = () => {
    if (subject.trim() === '') {
      return ToastAndroid.show(
        'Please mention the subject.',
        ToastAndroid.SHORT,
      );
    }
    if (concern.trim() === '') {
      return ToastAndroid.show(
        'Please mention the concern.',
        ToastAndroid.SHORT,
      );
    }
    return true;
  };

  const handleSubmit = () => {
    if (validate()) {
      console.log('submit');
      Keyboard.dismiss();
    }
  };

  return {
    subject,
    setSubject,
    concern,
    setConcern,
    validate,
    handleSubmit,
  };
};

export default useSupportScreen;
