import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>oops!</h1>
      <p>{error.statusText || error.message}</p>
    </div>
  );
};

export default ErrorPage;

//module 45-8
//module 45-9 summary
