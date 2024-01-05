import { axiosInstance } from "@/configs/AxiosConfig";

export const getQuestions = async ({
  limit,
  page,
  user,
}: {
  limit: number;
  page: number;
  user: any;
}) => {
  try {
    const { data } = await axiosInstance.get(
      `/questions?page=${page}&limit=${limit}`,
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

export const getQuestionById = async ({ user, id }: any) => {
  const { data } = await axiosInstance.get(
    `/questions/${id}`,
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
};
