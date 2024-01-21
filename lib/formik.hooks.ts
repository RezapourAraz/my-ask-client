import { IUser } from "@/components/cards/Profile.cards";
import { useFormik } from "formik";
import * as yup from "yup";

export const useLoginForm = (submitHandler: any) => {
  const initialValues = {
    email: "",
    password: "",
  };

  let schema = yup.object().shape({
    email: yup.string().required("email or username is required"),
    password: yup
      .string()
      .min(8, "password must be min 8 character")
      .required("password is required"),
  });

  return useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: submitHandler,
  });
};

export const useAskQuestionForm = (submitHandler: any) => {
  const initialValues = {
    title: "",
    content: "",
    user_id: null,
    tags: "",
  };

  let schema = yup.object().shape({
    title: yup.string().required("title is required"),
    content: yup.string().required("body is required"),
    tags: yup.string().required("tags is required"),
  });

  return useFormik({
    initialValues,
    validationSchema: schema,
    validateOnChange: false,
    onSubmit: submitHandler,
  });
};

export const useBlogForm = (submitHandler: any) => {
  const initialValues = {
    title: "",
    content: "",
  };

  const schema = yup.object().shape({
    title: yup.string().required("title is required"),
    content: yup.string().required("body is required"),
  });

  return useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema: schema,
    validateOnChange: false,
  });
};

export const useRegisterFrom = (submitHandler: any) => {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  };

  const schema = yup.object().shape({
    username: yup.string().required("username is required"),
    email: yup.string().email().required("email is required"),
    password: yup
      .string()
      .min(8, "password must be min 8 character")
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password confirmation is dose not match"),
  });

  return useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit: submitHandler,
    validateOnChange: false,
  });
};

export const useProfileForm = (submitHandler: any, user: IUser) => {
  const initialValues = user
    ? {
        about: user.about,
        birth: user.birth,
        city: user.city,
        country: user.country,
        email: user.email,
        first_name: user.first_name,
        gender: user.gender,
        id: user.id,
        last_name: user.last_name,
        phone: user.phone,
        profile: user.profile,
        username: user.username,
      }
    : {
        about: "",
        birth: "",
        city: "",
        country: "",
        email: "",
        first_name: "",
        gender: "",
        id: "",
        last_name: "",
        phone: "",
        profile: "",
        username: "",
      };

  return useFormik({
    initialValues,
    onSubmit: submitHandler,
    validateOnChange: false,
  });
};

export const useResetPasswordForm = (submitHandler: any) => {
  const initialValues = {
    password: "",
    confirmPassword: "",
  };

  const validateSchema = yup.object().shape({
    password: yup
      .string()
      .min(8, "password must be min 8 character")
      .required("password is required"),
    confirmPassword: yup
      .string()
      .oneOf([yup.ref("password")])
      .required("Password confirmation is dose not match"),
  });

  return useFormik({
    initialValues,
    onSubmit: submitHandler,
    validationSchema: validateSchema,
  });
};
