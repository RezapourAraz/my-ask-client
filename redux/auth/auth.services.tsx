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
