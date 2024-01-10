import { axiosInstance } from "@/configs/AxiosConfig";

export const getQuestions = async ({
  limit,
  page,
  filter,
  user,
}: {
  limit: number;
  page: number;
  filter: string;
  user: any;
}) => {
  try {
    const { data } = await axiosInstance.get(
      `/questions?page=${page}&limit=${limit}&filter=${filter}`,
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
  try {
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
  } catch (err) {
    console.log(err);
  }
};

export const updateQuestionViews = async ({ user, id }: any) => {
  try {
    const { data } = await axiosInstance.put(
      `/questions/view/${id}`,
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

export const askQuestion = async ({ user, body }: any) => {
  try {
    const { data } = await axiosInstance.post("/questions", body, {
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
