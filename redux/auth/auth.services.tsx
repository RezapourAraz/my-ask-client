import { axiosInstance } from "@/configs/AxiosConfig";

// types
export type IRegisterBody = {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const registerUser = async (body: IRegisterBody) => {
  try {
    const { data } = await axiosInstance.post("/auth/register", body);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const forgetPasswordLink = async (email: string) => {
  try {
    const { data } = await axiosInstance.post("/auth/reset-password", {
      email,
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const resetPassword = async ({ userId, token, password }: any) => {
  try {
    const { data } = await axiosInstance.post(
      `/auth/reset-password/${userId}/${token}`,
      {
        password,
      }
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
