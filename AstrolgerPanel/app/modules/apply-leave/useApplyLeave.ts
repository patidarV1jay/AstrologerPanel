import { useState } from 'react';
import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { ToastAndroid } from 'react-native';
import { ScreenString } from '../../constants';

const useApplyLeave = () => {
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());
  const [leaveReason, setLeaveReason] = useState<string>('');
  const timeDifference = toDate.getTime() - fromDate.getTime();
  const daysDifference = timeDifference / (1000 * 60 * 60 * 24);
  const numberOfDays = Math.floor(daysDifference);

  const onChange = (
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
    name: string,
  ) => {
    const currentDate = selectedDate;
    if (event.type === 'set') {
      currentDate && name === 'from' && setFromDate(currentDate);
      currentDate && name === 'to' && setToDate(currentDate);
    }
  };

  const showMode = (name: string) => {
    DateTimePickerAndroid.open({
      value: name === 'from' ? fromDate : toDate,
      maximumDate: new Date(),
      onChange: (a, b) => onChange(a, b, name),
    });
  };

  const validReason = () => {
    if (leaveReason.trim() === '') {
      ToastAndroid.show(ScreenString.enterReason, ToastAndroid.SHORT);
      return false;
    }
    return true;
  };

  const applyForLeave = () => {
    if (validReason()) {
      console.log('submit');
    }
  };

  return {
    fromDate,
    toDate,
    showMode,
    numberOfDays,
    setLeaveReason,
    leaveReason,
    applyForLeave,
  };
};

export default useApplyLeave;
