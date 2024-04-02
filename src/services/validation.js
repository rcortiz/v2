import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  fullname: yup.string().required("This field is required"),
  email: yup
    .string()
    .required("This field is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "Invalid email format"),
  subject: yup.string().required("This field is required"),
  body: yup.string().required("This field is required"),
});
