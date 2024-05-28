import { createSlice } from '@reduxjs/toolkit';
import getEarnings from './EarningService';

interface InitialStateType {
  isloading: boolean;
  earnings: {
    [key: string]: string;
  };
}

const initialState: InitialStateType = {
  isloading: false,
  earnings: {},
};

const EarningsSlice = createSlice({
  name: 'Earnings',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(getEarnings.pending, state => {
        state.isloading = true;
      })
      .addCase(getEarnings.fulfilled, (state, action) => {
        state.earnings = action.payload
        state.isloading = false;
      })
      .addCase(getEarnings.rejected, state => {
        state.isloading = false;
      });
  },
});

export default EarningsSlice.reducer
