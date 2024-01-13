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

export const userProfile = async ({ user, userId }: any) => {
  try {
    const { data } = await axiosInstance.get(
      `/users/profile/${userId}`,
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

export const userProfileUpdate = async ({
  user,
  body,
  userId,
}: {
  user: any;
  body: any;
  userId: any;
}) => {
  try {
    const { data } = await axiosInstance.put(
      `/users/profile/${userId}`,
      body,
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
