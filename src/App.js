import React from "react";
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import {
  Container,
  Center,
  Space,
} from "@mantine/core";
import Nav from "./components/Nav";
import "./css/App.css";

import Home from "./pages/Home";
import Presentation from "./pages/presentation/Presentation";
import ErrorPage from "./pages/ErrorPage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />

        <Space h="xl" />
        <Container>
          <Center>
            <Routes>
              <Route exact index element={<Home />} />
              <Route
                path="/presentation"
                element={<Navigate to="/presentation/1" />}
              />

              <Route path="/presentation">
                <Route path=":slideId" element={<Presentation />} />
              </Route>
              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </Center>
        </Container>
      </Router>
    </div>
  );
};

export default App;
