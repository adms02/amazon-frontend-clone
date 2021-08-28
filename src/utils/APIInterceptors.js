import React from "react";
import { api } from "../api";
import { useDispatch } from "react-redux";
import { logoutHandler } from "../slices/userSlice";
import { setErrorNotification } from "../../src/slices/notificationSlice";
import { deleteAllNotifications } from "../../src/slices/notificationSlice";

function APIInterceptors() {
  const dispatch = useDispatch();

  /**
   * Intercepts request,
   * Adds token to request before sending to server
   */

  api.interceptors.request.use(
    (config) => {
      if (!config.headers.Authorization) {
        const token = localStorage.getItem("token");
        if (token) {
          config.headers.Authorization = `Bearer ${token}`;
        }
      }
      // dispatch(deleteAllNotifications);

      return config;
    },
    (error) => {
      // dispatch(deleteAllNotifications);
      return Promise.reject(error);
    }
  );

  /**
   * Intercepts response
   * Logs the user out if token expired (401)
   */

  api.interceptors.response.use(
    function (response) {
      // Any status code that lie within the range of 2xx cause this function to trigger
      // Do something with response data
      return response;
    },
    function (error) {
      if (error.response.status === 401) {
        dispatch(logoutHandler());
      }

      if (error) {
        dispatch(setErrorNotification(error.response.data.error));
      }

      return Promise.reject(error);
    }
  );

  return <></>;
}

export default APIInterceptors;
