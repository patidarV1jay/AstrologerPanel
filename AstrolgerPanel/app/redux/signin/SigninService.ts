import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

interface Payload {
  email: string;
  password: string;
}
const authUser = createAsyncThunk(
  'Signin',
  async ({ email, password }: Payload, { rejectWithValue }) => {
    // const response = axios.get()
  },
);

export default authUser;
