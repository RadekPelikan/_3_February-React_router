import React from "react";
import { Title, Text } from "@mantine/core";

const ErrorPage = () => {
  return (
    <>
      <Title order={1}>
        <Text color="red" inherit component="span">
          Error 404
        </Text>
      </Title>
    </>
  );
};

export default ErrorPage;
