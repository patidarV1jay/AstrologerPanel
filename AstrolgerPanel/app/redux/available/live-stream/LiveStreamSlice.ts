import { createSlice } from '@reduxjs/toolkit';
import liveStream from './LiveStreamService';

interface InitialStateType {
  isloading: boolean;
  liveDetails: {
    [key: string]: string;
  };
  isSuccess: boolean;
}

const initialState: InitialStateType = {
  isloading: false,
  liveDetails: {},
  isSuccess: false,
};

const LiveStreamSlice = createSlice({
  name: 'LiveStream',
  initialState,
  reducers: {},
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

export default LiveStreamSlice.reducer;
