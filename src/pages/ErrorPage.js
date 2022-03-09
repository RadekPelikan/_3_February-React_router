import React from "react";

const ErrorPage = ({ err }) => {
  const errMessage = err ?? "Not found 404"
  return (
    <>
      <h2 className="page-error">{errMessage}</h2>
    </>
  );
};

export default ErrorPage;
