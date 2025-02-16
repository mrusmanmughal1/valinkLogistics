import * as Yup from "yup";

// login

export const LoginSchema = Yup.object({
  userName: Yup.string()
    .min(4)
    .max(25)
    .required("Enter Your User Name or E-mail !"),
  password: Yup.string().required("Please Enter Your Password !"),
});
 

 

// forget Password

export const ForgetPasswordSchema = Yup.object({
  email: Yup.string().email().required("Please Enter Your Email !"),
});

 
 