import { axiosInstance } from "@/configs/AxiosConfig";

export const searchServices = async ({ q, user }: { q: string; user: any }) => {
  try {
    const { data } = await axiosInstance.get(
      `/search?q=${q}`,
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
