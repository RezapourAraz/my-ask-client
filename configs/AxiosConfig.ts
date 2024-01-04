import axios from "axios";
import { getCookie, hasCookie } from "cookies-next";

const BASE_URL = "http://localhost:5005/api/v1";

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

    // console.log(user);

    if (user?.accessToken && typeof window !== "undefined") {
      config.headers.Authorization = `Bearer ${user?.accessToken}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor to refresh the JWT token if it's expired
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (error.response.status === 401 && !originalRequest._retry) {
      const backendRefreshToken =
        originalRequest.headers["RefreshToken"] || null;
      const refreshResult = await refreshAccessToken(backendRefreshToken);
      if (!refreshResult) {
        // TODO: Logout User
        return Promise.reject(error);
      }
      originalRequest._retry = true;
      // TODO: Set New accessToken To User Cookie
      return axiosInstance(originalRequest);
    }
    return Promise.reject(error);
  }
);

async function refreshAccessToken(backendRefreshToken: string | null) {
  let headers: any = {
    "Content-Type": "application/json; charset=utf-8;",
    Accept: "application/json",
  };
  let user: any = null;
  if (typeof window !== "undefined") {
    user = hasCookie("user") ? JSON.parse(getCookie("user") as string) : null;
  } else if (backendRefreshToken) {
    user = {
      refreshToken: backendRefreshToken,
    };
  }

  if (user) {
    headers["Authorization"] = "Bearer " + user?.refreshToken;
  }

  const result = await fetch(`${BASE_URL}/auth/refresh`, {
    method: "PATCH",
    headers,
  });

  if (result.status === 201) return await result.json();
  return null;
}
