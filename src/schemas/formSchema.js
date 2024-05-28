import * as Yup from "yup";

export const formSchema = Yup.object().shape({
  firstName: Yup.string().required("This field is required"),
  lastName: Yup.string().required("This field is required"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("This field is required"),
  message: Yup.string().required("This field is required"),
  consent: Yup.boolean().required(
    "To submit this form, please consent to being contacted"
  ),
});
