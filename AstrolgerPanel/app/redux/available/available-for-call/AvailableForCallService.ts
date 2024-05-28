import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../config';

interface PayloadType {
  id: string;
  call: string;
}

const fetchCallAvaibility = createAsyncThunk(
  'GetCallAvaibility',
  async ({ id, call }: PayloadType, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('astro_call_available', {
        astro_id: id,
        status: call,
      });
      return response.data;
    } catch (error) {
      console.log(error);
      return rejectWithValue('Avaibility Status is not updated.');
    }
  },
);

export default fetchCallAvaibility;
