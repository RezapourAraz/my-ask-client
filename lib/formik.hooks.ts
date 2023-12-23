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
