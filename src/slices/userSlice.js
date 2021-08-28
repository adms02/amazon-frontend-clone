import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  firstname: "",
  lastname: "",
  email: "",
  isLoggedIn: false,
  // isLoggedIn: localStorage.getItem("token") ? true : false,
  token: localStorage.getItem("token") === null ? "" : `Bearer ${localStorage.getItem("token")}`,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginHandler: (state, action) => {
      state.id = action.payload.user.id;
      state.token = `Bearer ${action.payload.token}`;
      state.firstname = action.payload.user.firstname;
      state.lastname = action.payload.user.lastname;
      state.email = action.payload.user.email;
      state.isLoggedIn = true;
      localStorage.setItem("token", action.payload.token);
    },

    logoutHandler: (state, action) => {
      localStorage.removeItem("token");
      Object.assign(state, initialState);
    },

    updateCustomer: (state, action) => {
      state.id = action.payload.id;
      state.token = state.token;
      state.firstname = action.payload.firstname;
      state.lastname = action.payload.lastname;
      state.email = action.payload.email;
      state.isLoggedIn = true;
    },
  },
});

export const { loginHandler } = userSlice.actions;
export const { logoutHandler } = userSlice.actions;
export const { updateCustomer } = userSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const getUser = (state) => state.user;

export const getToken = (state) => state.user.token;
export const getIsLoggedIn = (state) => state.user.isLoggedIn;

export default userSlice.reducer;
