import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: '0', name: 'Damanpreet Grewal' },
  { id: '1', name: 'John Mathews' },
  { id: '2', name: 'Blake Hamilton' },
];

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
});

export const selectAllUsers = state => state.users;

export default usersSlice.reducer;
