import { createSlice } from '@reduxjs/toolkit';
import setcallCharges from './SetCallChargesService';
import { SetCallChargesReducer } from '.';

interface InitialStateType {
  isloading: boolean;
  callCharges: { [key: string]: string };
  realCharges: { [key: string]: string };
  isSuccess: boolean;
}

const initialState: InitialStateType = {
  isloading: false,
  callCharges: {},
  realCharges: {},
  isSuccess: false,
};

const SetCallChargeSlice = createSlice({
  name: 'SetCallCharge',
  initialState,
  reducers: {
    callChargesReducer: (state, action) => {
      state.realCharges = action.payload;
    },
    resetSuccess: state => {
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(setcallCharges.pending, state => {
        state.isloading = true;
      })
      .addCase(setcallCharges.fulfilled, (state, action) => {
        console.log('hhey setcallslice')
        state.callCharges = action.payload;
        state.isloading = false;
        state.isSuccess = true;
      })
      .addCase(setcallCharges.rejected, state => {
        state.isloading = false;
        state.isSuccess = false
      });
  },
});

export const { callChargesReducer , resetSuccess} = SetCallChargeSlice.actions;
export default SetCallChargeSlice.reducer;
