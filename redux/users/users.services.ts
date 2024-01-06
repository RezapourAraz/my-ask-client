import { axiosInstance } from "@/configs/AxiosConfig";

export const getHighestUserPoint = async ({ user }: any) => {
  try {
    const { data } = await axiosInstance.get(
      "/users/highest",
      user
        ? {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
              RefreshToken: user?.refreshToken,
            },
          }
        : undefined
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getStats = async ({ user }: any) => {
  try {
    const { data } = await axiosInstance.get(
      "/users/stats",
      user
        ? {
            headers: {
              Authorization: `Bearer ${user?.accessToken}`,
              RefreshToken: user?.refreshToken,
            },
          }
        : undefined
    );

    return data;
  } catch (err) {
    console.log(err);
  }
};
