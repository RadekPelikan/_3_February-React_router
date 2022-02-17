import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { Container, Center, Space } from "@mantine/core";
import Nav from "./components/Nav";
import "./css/App.css";

import HomePage from "./pages/HomePage";
import SlidePage from "./pages/SlidePage";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Nav />

      <Space h="xl" />
      <Container>
        <Center>
          <Routes>
            <Route exact index element={<HomePage />} />
            <Route
              path="/presentation"
              element={<Navigate to="/presentation/1" />}
            />

            <Route path="/presentation">
              <Route path=":slideId" element={<SlidePage />} />
            </Route>
            <Route path="*" element={<ErrorPage err="Not found 404"/>} />
          </Routes>
        </Center>
      </Container>
    </div>
  );
};

export default App;
