import * as yup from "yup";

export const contactFormSchema = yup.object().shape({
  fullname: yup
    .string()
    .trim()
    .min(2, "Enter at least 2 characters")
    .max(80, "Keep your name under 80 characters")
    .required("Full name is required"),
  email: yup
    .string()
    .trim()
    .email("Enter a valid email address")
    .max(254, "Email address is too long")
    .required("Email is required"),
  subject: yup
    .string()
    .oneOf(
      [
        "Project inquiry",
        "Collaboration",
        "Consulting",
        "General inquiry",
      ],
      "Choose a reason for contacting me",
    )
    .required("Choose a reason for contacting me"),
  body: yup
    .string()
    .trim()
    .min(10, "Tell me a little more about why you're reaching out")
    .max(2000, "Keep your message under 2,000 characters")
    .required("Message is required"),
});
