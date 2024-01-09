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

export const addQuestionAnswer = async ({ user, body }: any) => {
  try {
    const { data } = await axiosInstance.post("/answers", body, {
      headers: {
        Authorization: `Bearer ${user.accessToken}`,
        RefreshToken: user.refreshToken,
      },
    });

    return data;
  } catch (err) {
    console.log(err);
  }
};
