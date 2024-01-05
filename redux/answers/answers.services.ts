import { axiosInstance } from "@/configs/AxiosConfig";

export const getQuestionAnswers = async ({ id, user }: any) => {
  try {
    const { data } = await axiosInstance.get(
      `/answers/${id}`,
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
