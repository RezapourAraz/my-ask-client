import { axiosInstance } from "@/configs/AxiosConfig";

export const getTags = async ({ user, limit = 200, page = 1 }: any) => {
  try {
    const { data } = await axiosInstance.get(
      `/tags?limit=${limit}&page=${page}`,
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
