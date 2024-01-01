import { Draft, createSlice } from '@reduxjs/toolkit';
import { SliceConstants } from '../../constants';

interface InitialStateType {
  isSuccess: boolean;
}
const initialState: InitialStateType = {
  isSuccess: false,
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
    },
  },
});

export const { login, logOut } = SigninSlice.actions;
export default SigninSlice.reducer;
