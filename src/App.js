import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, UserPage, ErrorPage } from "./pages";
import { NavBar, BottomNavBar } from "./components";
import "./css/App.css";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route exact index element={<HomePage />} />

        <Route path="/user" element={<Navigate to="/" />} />
        <Route path="/user/:id" element={<UserPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <BottomNavBar />
    </div>
  );
};

export default App;
