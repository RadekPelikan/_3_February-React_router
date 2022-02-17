import React from "react";
import { Title, Text } from "@mantine/core";

const ErrorPage = ({ err }) => {
  const errMessage = err ?? "Not found 404"
  return (
    <>
      <Title order={1}>
        <Text color="red" inherit component="span">
          {errMessage}
        </Text>
      </Title>
    </>
  );
};

export default ErrorPage;
