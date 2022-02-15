import React from "react";
import {
  Container,
  Center,
  Navbar,
  Title,
  AppShell,
  Header,
  List,
  Group,
  Button,
} from "@mantine/core";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <Header>
      <Center>
        <Group className="nav-bar">
          <Link to="/">
            <Title order={3}>Home</Title>
          </Link>
          <Link to="/presentation">
            <Title order={3}>Presentation</Title>
          </Link>
        </Group>
      </Center>
    </Header>
  );
};

export default Nav;
