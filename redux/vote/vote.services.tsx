import { axiosInstance } from "@/configs/AxiosConfig";

export const voteService = async ({ user, body, relId }: any) => {
  try {
    const { data } = await axiosInstance.patch(`root/vote/${relId}`, body, {
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

export const reportService = async ({ user, body }: any) => {
  try {
    const { data } = await axiosInstance.post(`root/report`, body, {
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
