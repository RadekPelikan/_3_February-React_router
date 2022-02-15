import React from "react";
import { useParams } from "react-router-dom";
import { Title } from "@mantine/core";
import Slides from "./Slides";

const Presentation = () => {
  const { slideId } = useParams();
  return (
    <>
      <Title order={1}>Presentation Page {slideId}</Title>
      <Slides/>
    </>
  );
};

export default Presentation;
