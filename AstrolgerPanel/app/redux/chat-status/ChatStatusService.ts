import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

interface PayloadType {
  status: string;
  roomId: string;
  userId: string
}

const postChatStatus = createAsyncThunk(
  'post/chat',
  async ({ status, roomId, userId }: PayloadType) => {
    try {
      const response = await axiosInstance.get(
        `room_status_change/${roomId}/${status}/${userId}`,
      );
      return response.data
    } catch (error: any) {
      console.log(error.response.data);
    }
  },
);

export default postChatStatus;
