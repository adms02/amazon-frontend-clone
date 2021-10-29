import { configureStore } from "@reduxjs/toolkit";
import basketSlice from "../slices/basketSlice";
import userSlice from "../slices/userSlice";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import notificationSlice from "../slices/notificationSlice";
import recaptchaSlice from "../slices/recaptchaSlice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["basket", "recaptcha"],
};

const reducers = combineReducers({
  user: userSlice,
  basket: basketSlice,
  notification: notificationSlice,
  recaptcha: recaptchaSlice,
});

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],

  // middle: applyMiddleware(thunk),
});

// https://edvins.io/how-to-use-redux-persist-with-redux-toolkit
