import * as yup from "yup";

export const schema = yup
  .object({
    fullName: yup
      .string()
      .min(3, "Name has to be 3 or more letters")
      .required("you need to provide a name"),
    email: yup
      .string()
      .email("you need a valid email")
      .required("you need to provide an email"),
    subject: yup
      .string()
      .min(3, "Subject needs to be 3 or more letters")
      .required("Subject is required"),
    body: yup
      .string()
      .min(3, "body needs to be 3 or more letters")
      .required("body is required"),
  })
  .required();
