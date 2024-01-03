import {
  DateTimePickerAndroid,
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { useState } from 'react';

const useCallDetails = () => {
  const [fromDate, setFromDate] = useState<Date>(new Date());
  const [toDate, setToDate] = useState<Date>(new Date());

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
      onChange: (a, b) => onChange(a, b, name),
      is24Hour: true,
      maximumDate: new Date(),
    });
  };

  return {
    showMode,
    fromDate,
    toDate,
  };
};

export default useCallDetails;
