import React from "react";
import ReusableForm from "./ReusableForm";

function SignupForm() {
  const signupFields = [
    {
      name: "username",
      type: "text",
      label: "Username",
      placeholder: "Choose a username",
    },
    {
      name: "email",
      type: "email",
      label: "Email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      type: "password",
      label: "Password",
      placeholder: "Create a password",
    },
  ];

  const handleSignupSubmit = (data) => {
    console.log("Signup Data:", data);
    // Handle signup logic here
  };

  return (
    <ReusableForm
      fields={signupFields}
      onSubmit={handleSignupSubmit}
      buttonText="Signup"
    />
  );
}

export default SignupForm;
