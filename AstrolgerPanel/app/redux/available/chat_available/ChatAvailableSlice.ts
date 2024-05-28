import { Draft, PayloadAction, createSlice } from '@reduxjs/toolkit';
import fetchChatAvailability from './ChatAvailableService';

interface LiveAvaibilityType {
  [key: string]: string;
}

interface InitialStateType {
  chatAvaibility: LiveAvaibilityType;
  isLoading: boolean;
  error: string;
  isError: boolean;
  toggleChat: boolean
}

const initialState: InitialStateType = {
  chatAvaibility: {},
  isLoading: false,
  error: '',
  isError: false,
  toggleChat: false
};

const AvailableForChatSlice = createSlice({
  name: 'AvailableForLive',
  initialState,
  reducers: {
    resetChatError: state => {
      state.error = '';
    },
    toggleChatReducer: (state)=>{
      state.toggleChat = !state.toggleChat
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchChatAvailability.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchChatAvailability.fulfilled, (state, action) => {
        state.isError = false;
        state.isLoading = false;
        state.chatAvaibility = { ...action.payload };
      })
      .addCase(
        fetchChatAvailability.rejected,
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

export const { resetChatError, toggleChatReducer } = AvailableForChatSlice.actions;
export default AvailableForChatSlice.reducer;
