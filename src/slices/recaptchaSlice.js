import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  attempts: 0,
};

export const recaptchaSlice = createSlice({
  name: "recaptcha",
  initialState,
  reducers: {
    addAttempt: (state, action) => {
      state.attempts += 1;
    },

    clearAttempts: (state, action) => {
      Object.assign(state, initialState);
    },
  },
});

export const { addAttempt } = recaptchaSlice.actions;
export const { clearAttempts } = recaptchaSlice.actions;

// Selectors - This is how we pull information from the Global store slice

export const getAttempts = (state) => state.recaptcha.attempts;

export default recaptchaSlice.reducer;
