import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../config';
import { ToastAndroid } from 'react-native';

interface PayloadType {
  astro_id: string;
  call_price: number;
  rate: string;
  discount: string;
}

const setcallCharges = createAsyncThunk(
  'call/charges',
  async ({ astro_id, call_price, rate, discount }: PayloadType) => {
    try {
      console.log(astro_id,call_price)
      const response = await axiosInstance.post('set_call_price', {
        call_price,
        astro_id,
      });
      console.log(response,'response from set call service')
      return { rate, discount, ...response.data };
    } catch (error) {
        console.log(error.response.data,'hee')
       ToastAndroid.show("Error while updating, Please try again !", ToastAndroid.SHORT)
    }
  },
);

export default setcallCharges;
