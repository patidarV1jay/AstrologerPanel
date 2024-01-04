import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';
import { encode } from 'base-64';

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
    try {
      const response = await axiosInstance.post('login', {
        username,
        password,
      });
      return response.data.data;
    } catch (error) {
      throw new Error('Invalid Credentials.');
    }
  },
);

export default authUser;
