import React from "react";
import ReusableForm from "./ReusableForm";

function LoginForm() {
  const loginFields = [
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
      placeholder: "Enter your password",
    },
  ];

  const handleLoginSubmit = (formData) => {
    console.log("Submitted data:", formData);
    // Add your form handling logic here (e.g., API call)
  };

  return (
    <ReusableForm
      fields={loginFields}
      onSubmit={handleLoginSubmit}
      buttonText="Login"
    />
  );
}

export default LoginForm;
