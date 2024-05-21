import { createSlice } from '@reduxjs/toolkit';
import liveStream from './LiveStreamService';

interface InitialStateType {
  isloading: boolean;
  liveDetails: {
    [key: string]: string;
  };
  isSuccess: boolean;
  isChat: boolean;
  notification: { [key: string]: string };
}

const initialState: InitialStateType = {
  isloading: false,
  liveDetails: {},
  isSuccess: false,
  isChat: false,
  notification: {},
};

const LiveStreamSlice = createSlice({
  name: 'LiveStream',
  initialState,
  reducers: {
    chatModalReducer: (state, action) => {
      state.isChat = action.payload;
    },
    notificatonReducer: (state, action) => {
      state.notification = action.payload;
      
    },
  },
  extraReducers: builder => {
    builder
      .addCase(liveStream.pending, state => {
        state.isloading = true;
        state.isSuccess = false;
      })
      .addCase(liveStream.fulfilled, (state, action) => {
        state.isloading = false;
        state.isSuccess = true;
        state.liveDetails = { ...action.payload };
      })
      .addCase(liveStream.rejected, state => {
        state.isloading = false;
        state.isSuccess = false;
      });
  },
});

export const { chatModalReducer, notificatonReducer } = LiveStreamSlice.actions;
export default LiveStreamSlice.reducer;
