import { createSlice } from '@reduxjs/toolkit';
import postChatStatus from './ChatStatusService';

interface InitialStateType {
  isloading: boolean;
  isSuccess: boolean;
  statusResponse: { [key: string]: string };
}

const initialState: InitialStateType = {
  isloading: false,
  isSuccess: false,
  statusResponse: {},
};

const ChatStatusSlice = createSlice({
  name: 'ChatStatus',
  initialState,
  reducers: {
    resetChatSuccess: state => {
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(postChatStatus.pending, state => {
        state.isloading = true;
      })
      .addCase(postChatStatus.fulfilled, (state, action) => {
        state.isloading = false;
        state.isSuccess = true;
      })
      .addCase(postChatStatus.rejected, state => {
        state.isloading = false;
      });
  },
});

export const { resetChatSuccess } = ChatStatusSlice.actions;
export default ChatStatusSlice.reducer;
