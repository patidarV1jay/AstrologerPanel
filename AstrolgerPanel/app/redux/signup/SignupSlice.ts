import { createSlice } from '@reduxjs/toolkit';
import { SliceConstants } from '../../constants';
import { registerUser } from '.';

interface InitialStateType {
  isSuccess: boolean;
  isLoading: boolean;
  error: string;
}

const initialState: InitialStateType = {
  isSuccess: false,
  isLoading: false,
  error: '',
};

const SignupSlice = createSlice({
  name: SliceConstants.signup,
  initialState,
  reducers: {
    registraionSuccess: state => {
      state.isSuccess = false;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(registerUser.pending, state => {
        (state.isSuccess = false), (state.isLoading = true);
      })
      .addCase(registerUser.fulfilled, state => {
        (state.isLoading = false), (state.isSuccess = true);
      })
      .addCase(registerUser.rejected, state => {
        state.isLoading = false;
      });
  },
});

export const { registraionSuccess } = SignupSlice.actions;
export default SignupSlice.reducer;
