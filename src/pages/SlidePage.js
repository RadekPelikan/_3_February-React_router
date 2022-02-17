import React from "react";
import { useParams } from "react-router-dom";
import { Title } from "@mantine/core";

const SlidePage = () => {
  const { slideId } = useParams();
  return (
    <>
      <Title order={1}>Presentation Page {slideId}</Title>
    </>
  );
};

export default SlidePage;
