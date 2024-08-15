import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useUser } from "../providers/UserProvider";
import useForm from "../../sandbox/forms/hooks/useForm";
import initialSignupForm from "../helpers/initialForms/initialSignUpForm";
import signupSchema from "../models/signupSchema";
import { Container } from "@mui/material";
import SignupForm from "../components/SignUpForm";
import LoginForm from "../components/LoginForm";
import initialLoginForm from "../helpers/initialForms/initialLoginForm";
import loginSchema from "../models/loginSchema";

const handleLogin = (userDetails) => {
  console.log(userDetails);
};

export default function LoginPage() {
  const {
    data,
    errors,
    handleChange,
    handleReset,
    validateForm,
    onSubmit,
    handleChangeCheckBox,
  } = useForm(initialLoginForm, loginSchema, handleLogin);

  const { user } = useUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <Container
      sx={{
        paddingTop: 8,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <LoginForm
        onSubmit={onSubmit}
        onReset={handleReset}
        validateForm={validateForm}
        title={"register form"}
        errors={errors}
        data={data}
        onInputChange={handleChange}
        handleChangeCheckBox={handleChangeCheckBox}
      />
    </Container>
  );
}
