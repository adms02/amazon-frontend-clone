import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  errorNotification: "",
  successNotification: "",
};

export const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    setErrorNotification: (state, action) => {
      state.errorNotification = action.payload;
    },
    setSuccessNotification: (state, action) => {
      state.successNotification = action.payload;
    },

    deleteAllNotifications: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

export const { setErrorNotification } = notificationSlice.actions;
export const { setSuccessNotification } = notificationSlice.actions;
export const { deleteAllNotifications } = notificationSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const getErrorNotification = (state) => state.notification.errorNotification;
export const getSuccessNotification = (state) => state.notification.successNotification;

export default notificationSlice.reducer;
