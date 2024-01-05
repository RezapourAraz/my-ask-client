import { axiosInstance } from "@/configs/AxiosConfig";

export const getTags = async ({ user }: any) => {
  try {
    const { data } = await axiosInstance.get(
      "/tags",
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
