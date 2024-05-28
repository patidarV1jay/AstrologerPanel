import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';
import { encode } from 'base-64';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (!global.btoa) {
  global.btoa = encode;
}
interface Payload {
  username: string;
  password: string;
}
const authUser = createAsyncThunk(
  'Signin',
  async ({ username, password }: Payload, { rejectWithValue }) => {
    const fcm_token = await AsyncStorage.getItem('fcmToken');
    try {
      const response = await axiosInstance.post('login', {
        username,
        password,
        fcm_token,
      });
      return response?.data.data;
    } catch (error) {
      throw new Error('Invalid Credentials.');
    }
  },
);

export default authUser;
