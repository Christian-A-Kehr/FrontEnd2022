import { createSlice } from "@reduxjs/toolkit";

export type Profile = {
  name: string,
  email: string, 
  profilePicture: string, 
  department: string, 
  fullAuthorization: boolean
};

export type UserListState = {
  profile: Profile[];
  loading: boolean;
  error: boolean;
};

const initialState: UserListState = {
  profile: [],
  loading: false,
  error: false
};

const userListSlice = createSlice({
  name: 'userList',
  initialState: initialState,
  reducers: {},
});

export default userListSlice.reducer