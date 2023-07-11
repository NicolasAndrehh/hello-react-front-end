import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const fetchGreeting = createAsyncThunk('greeting/fetchGreeting', async () => {
  const response = await fetch('http://localhost:3001/greeting/random');
  const greeting = await response.json();
  return greeting;
});

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    greeting: '',
  },
  extraReducers: {
    [fetchGreeting.pending]: (state) => {
      state.status = 'loading';
    },
    [fetchGreeting.fulfilled]: (state, action) => {
      state.status = 'success';
      state.greeting = action.payload.message;
    },
    [fetchGreeting.rejected]: (state) => {
      state.status = 'failed';
    },
  },
});

export default greetingSlice.reducer;
export { fetchGreeting };
