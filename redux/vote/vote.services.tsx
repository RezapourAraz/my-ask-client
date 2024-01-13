import { axiosInstance } from "@/configs/AxiosConfig";

export const voteService = async ({ user, body, relId }: any) => {
  try {
    const { data } = await axiosInstance.patch(`/vote/${relId}`, body, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
        RefreshToken: user?.refreshToken,
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
