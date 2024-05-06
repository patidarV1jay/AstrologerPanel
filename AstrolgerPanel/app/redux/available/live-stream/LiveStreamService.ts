import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../config';

interface PayloadType {
  astro_id: string;
  status: string;
}

const liveStream = createAsyncThunk(
  'goLiveStreaming',
  async ({ astro_id, status }: PayloadType) => {
    try {
      const response = await axiosInstance.post('./astro_live', {
        astro_id,
        status,
      });
      return response?.data;
    } catch (error) {
      return error;
    }
  },
);

export default liveStream;
