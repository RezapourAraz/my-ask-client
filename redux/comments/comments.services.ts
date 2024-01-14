import { axiosInstance } from "@/configs/AxiosConfig";

export const commentServices = async ({ user, body }: any) => {
  try {
    const { data } = await axiosInstance.post(
      "/comments",
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
