import axios from "axios";

const BASE_URL = "http://localhost:5005/api/v1";

// Function to retrieve a specific cookie by name
const getCookie = async (name: string) => {
  const cookies = await document.cookie.split(";");
  for (const cookie of cookies) {
    const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
    if (cookieName === name) {
      return cookieValue;
    }
  }
  return null;
};

// Create a new axios instance
export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

// Add a request interceptor to add the JWT token to the authorization header
axiosInstance.interceptors.request.use(
  (config) => {
    const user: any = getCookie("user");

    console.log(user);

    if (user?.accessToken) {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to refresh the JWT token if it's expired
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const originalRequest = error.config;
    const user: any = getCookie("user");

    console.log(user);

    // If the error is a 401 and we have a refresh token, refresh the JWT token
    if (error.response?.status === 401 && user?.refreshToken) {
      // let data = JSON.stringify({
      //   refresh_token: refreshToken,
      // });

      // post("/refreshToken", data)
      //   .then((response) => {
      //     sessionStorage.setItem("jwtToken", response.token);
      //     sessionStorage.setItem("refreshToken", response.refresh_token);

      // Re-run the original request that was intercepted
      originalRequest.headers.Authorization = `Bearer ${user?.refreshToken}`;
      axiosInstance(originalRequest);
      //   .then((response) => {
      //     return response.data;
      //   })
      //   .catch((error) => {
      //     console.log(error);
      //   });
      // return axiosInstance(originalRequest)
    }

    // Return the original error if we can't handle it
    return Promise.reject(error);
  }
);
