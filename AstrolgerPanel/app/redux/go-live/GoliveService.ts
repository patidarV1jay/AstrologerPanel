import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface PayloadType {
  userID: string;
  liveID: string;
}

const goLiveCall = createAsyncThunk(
  'post/golive',
  async ({ userID, liveID }: PayloadType) => {
    try {
      const response = await axiosInstance.post('go_live', {
        astrologerid: userID,
        astrologerSlug: liveID
      });
      console.log(response.data,'response')
    } catch (error) {}
  },
);

export default goLiveCall;
