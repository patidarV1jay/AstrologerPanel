import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';
import { fetchCallAvaibility } from '.';

interface LiveAvaibilityType {
  [key: string]: string;
}

interface InitialStateType {
  callAvaibility: LiveAvaibilityType;
  isLoading: boolean;
  error: string;
  isError: boolean;
}

const initialState: InitialStateType = {
  callAvaibility: {},
  isLoading: false,
  error: '',
  isError: false,
};

const AvailableForCallSlice = createSlice({
  name: 'AvailableForLive',
  initialState,
  reducers: {
    resetAvailableError: state => {
      state.error = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCallAvaibility.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchCallAvaibility.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.callAvaibility = { ...action.payload };
      })
      .addCase(
        fetchCallAvaibility.rejected,
        (
          state: Draft<InitialStateType>,
          action: PayloadAction<any, string>,
        ) => {
          state.error = action.payload;
          state.isLoading = false;
          state.isError = true;
        },
      );
  },
});

export const { resetAvailableError } = AvailableForCallSlice.actions;
export default AvailableForCallSlice.reducer;
