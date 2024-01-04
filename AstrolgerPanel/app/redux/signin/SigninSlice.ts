import { Draft, createSlice } from '@reduxjs/toolkit';
import { SliceConstants } from '../../constants';
import authUser from './SigninService';

interface InitialStateType {
  isSuccess: boolean;
  isloading: boolean;
  error: string;
  loggedInUser: {
    [key: string]: string;
  };
}
const initialState: InitialStateType = {
  isSuccess: false,
  isloading: false,
  error: '',
  loggedInUser: {},
};

const SigninSlice = createSlice({
  name: SliceConstants.signin,
  initialState,
  reducers: {
    login: (state: Draft<InitialStateType>) => {
      state.isSuccess = true;
    },
    logOut: (state: Draft<InitialStateType>) => {
      state.isSuccess = false;
      state.loggedInUser = {};
    },
    resetError: state => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(authUser.pending, state => {
        state.isloading = true;
        state.isSuccess = false;
      })
      .addCase(authUser.fulfilled, (state, action) => {
        state.isloading = false;
        state.isSuccess = true;
        state.loggedInUser = { ...action.payload };
      })
      .addCase(authUser.rejected, (state, action) => {
        state.isloading = false;
        state.isSuccess = false;
        state.error = action?.error?.message || 'Login Failed';
      });
  },
});

export const { login, logOut, resetError } = SigninSlice.actions;
export default SigninSlice.reducer;
