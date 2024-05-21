import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface PayloadType {
  userID: string;
  liveID: string;
}

const stopLiveStreamCall = createAsyncThunk(
  'post/stopLive',
  async ({ userID, liveID }: PayloadType) => {
    try {
      const response = await axiosInstance.post('stop_live_stream', {
        astrologerid: userID,
        astrologerSlug: liveID,
      });
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  },
);

export default stopLiveStreamCall;
