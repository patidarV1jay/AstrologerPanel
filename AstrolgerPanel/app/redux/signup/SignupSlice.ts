import { createSlice } from '@reduxjs/toolkit';
import { SliceConstants } from '../../constants';

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
  reducers: {},
  extraReducers: builder => {},
});

export default SignupSlice.reducer;
