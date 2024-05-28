import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

const getEarnings = createAsyncThunk('get/earnings', async (id: string) => {
  try {
    const response = await axiosInstance.get(`get_astrologer_earning/${id}`);
    console.log(response.data,'earn')
    return response.data;
  } catch (error) {
    console.log(error.response.data, 'from getearning');
  }
});

export default getEarnings;
