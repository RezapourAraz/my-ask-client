import { axiosInstance } from "@/configs/AxiosConfig";

export const getBlogs = async ({
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
      `/blogs?page=${page}&limit=${limit}`,
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

export const addBlog = async ({ user, body }: any) => {
  try {
    const { data } = await axiosInstance.post("/blogs", body, {
      headers: {
        Authorization: `Bearer ${user?.accessToken}`,
        RefreshToken: user?.refreshToken,
        "Content-Type": "multipart/form-data",
      },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
