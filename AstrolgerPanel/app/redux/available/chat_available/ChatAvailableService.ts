import { createAsyncThunk } from '@reduxjs/toolkit';
import { axiosInstance } from '../../../config';

interface PayloadType {
  id: string;
  chat: string;
}

const fetchChatAvailability = createAsyncThunk(
  'GetChatAvaibility',
  async ({ id, chat }: PayloadType, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.post('astro_chat_available', {
        astro_id: id,
        status: chat,
      });
      return response.data;
    } catch (error) {
      return rejectWithValue('Avaibility Status is not updated.');
    }
  },
);

export default fetchChatAvailability;
