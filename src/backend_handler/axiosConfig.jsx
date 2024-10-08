import axios from "axios";
import { notification } from "antd";

const axiosInstance = axios.create();

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      // window.location.href = "/";
      console.error(error.response);
      // showAlert(
      //   "error",
      //   "Unauthorized",
      //   "You are not authorized. Please login."
      // );
    } else if (error.isAxiosError && !error.response) {
      console.error(error);
      // Network error
      // showAlert(
      //   "error",
      //   "Network Error",
      //   "Please check your network connection or contact the administrator."
      // );
    }
    return Promise.reject(error);
  }
);

const showAlert = (type, message, description) => {
  notification[type]({
    message,
    description,
    duration: 10,
  });
};

export default axiosInstance;
