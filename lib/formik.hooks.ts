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
    tags: [],
  };

  let schema = yup.object().shape({
    title: yup.string().required("title is required"),
    content: yup.string().required("body is required"),
    tags: yup.array().required("tags is required"),
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
