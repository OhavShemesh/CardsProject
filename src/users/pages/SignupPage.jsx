import React from "react";
import { Navigate } from "react-router-dom";
import ROUTES from "../../routes/routesModel";
import { useCurrentUser } from "../providers/UserProvider";
import { Container } from "@mui/material";
import SignupForm from "../components/SignUpForm";
import PageHeader from "../../components/PageHeader";
import useForm from "../../forms/hooks/useForm";
import signupSchema from "../models/signupSchema";
import useUsers from "../hooks/useUsers";
import initialSignupForm from "../helpers/initialForms/initialSignUpForm";



export default function SignupPage() {
  const { handleSignUp } = useUsers()

  const handleSignupFunc = async (newUserDetails) => {

    const newUserDetailsValidate = {
      name: {
        first: newUserDetails.first,
        middle: newUserDetails.middle ? newUserDetails.middle : "",
        last: newUserDetails.last
      },
      phone: newUserDetails.phone,
      email: newUserDetails.email,
      password: newUserDetails.password,
      image: {
        url: newUserDetails.url ? newUserDetails.url : "",
        alt: newUserDetails.alt ? newUserDetails.alt : ""
      },
      address: {
        state: newUserDetails.state,
        country: newUserDetails.country,
        city: newUserDetails.city,
        street: newUserDetails.street,
        houseNumber: newUserDetails.houseNumber,
        zip: newUserDetails.zip
      },
      isBusiness: newUserDetails.isBusiness

    }

    handleSignUp(newUserDetailsValidate)
  };


  const { onSubmit, handleReset, validateForm, errors, data, handleChange, handleChangeCheckBox } = useForm(initialSignupForm, signupSchema, handleSignupFunc)

  const { user } = useCurrentUser();

  if (user) return <Navigate to={ROUTES.ROOT} replace />;

  return (
    <>
      <PageHeader
        title="Welcome to Register page"
        subtitle="here you can register"
      />
      <Container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <SignupForm
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

    </>
  );
}
