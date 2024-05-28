import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";

//sign-up schema

const signupSchema = Yup.object({
  email: Yup.string()
    .email("Please enter valid email address")
    .required("please filled this field"),
  password: Yup.string()
    .required("Please fill this field")
    .min(6, "please enter minimum 6 charecter"),
});

export const useSignupValidation = () =>
  useForm({
    resolver: yupResolver(signupSchema),
  });

//login schema
// const loginSchema = Yup.object({
//   email: Yup.string()
//     .email("Please enter valid email address")
//     .required("please filled this field"),
//   password: Yup.string()
//     .required("Please fill this field")
//     .min(6, "please enter minimum 6 charecter"),
// });

// export const LoginValidation = () =>
//   useForm({
//     resolver: yupResolver(loginSchema),
//   });
