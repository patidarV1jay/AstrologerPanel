import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface PayloadType {
  status: string;
  roomId: string;
}

const postChatStatus = createAsyncThunk(
  'post/chat',
  async ({ status, roomId }: PayloadType) => {
    try {
      const response = await axiosInstance.get(
        `room_status_change/${roomId}/${status}`,
      );
      console.log(response.data);
      return response.data
    } catch (error: any) {
      console.log(error.response.data);
    }
  },
);

export default postChatStatus;
