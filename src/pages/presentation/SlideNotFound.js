import React, { useState, useEffect } from "react";
import { Title } from "@mantine/core";
import ErrorPage from "../ErrorPage";

const SlideNotFound = () => {
  const [showError, setShowError] = useState(false);

  useEffect(() => {
    setTimeout(() => setShowError(true), 3500);
  }, []);

  return (
    <>
      {showError ? (
        <ErrorPage err="Slide not found" />
      ) : (
        <Title order={1}>Loading...</Title>
      )}
    </>
  );
};

export default SlideNotFound;
