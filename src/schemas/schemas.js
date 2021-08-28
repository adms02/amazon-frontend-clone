import * as Yup from "yup";

/**
 * Yup Validation Schemas
 */

export const loginSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
  password: Yup.string().min(6, "Too Short!").max(50, "Too Long!").required("Required"),
});

export const requestResetPasswordSchema = Yup.object().shape({
  password: Yup.string().min(6, "Enter a longer password").max(40, "Enter a shorter password").required("Enter a password"),
  confirmpassword: Yup.string().oneOf([Yup.ref("password"), null], "Password must match"),
});

export const setPasswordSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
});

export const setNameSchema = Yup.object().shape({
  name: Yup.string().min(4, "Too Short!").max(15, "Too Long!").required("Required"),
});

export const setEmailSchema = Yup.object().shape({
  email: Yup.string().email("Must be a valid email").max(255).required("Email is required"),
});
