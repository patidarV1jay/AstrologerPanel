import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../config';

const closeChat = createAsyncThunk('close/chat', async (roomId: string) => {
  try {
    const response = await axiosInstance(`close_chat/${roomId}`);
    console.log(response.data, 'closechat service');
  } catch (error) {
    console.log(error, 'closechat');
  }
});

export default closeChat;
