import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { HomePage, UserPage, ErrorPage } from "./pages";
import { NavBar, BottomNavBar } from "./components";
import "./css/App.css";

const App = () => {
  const index = "_3_February-React_router";
  return (
    <div className="App">
      <NavBar index={index} />
      <Routes>
        <Route exact path={index} element={<HomePage />} />
        <Route path={index}>
          
          <Route exact path="user" element={<Navigate to={index} />} />
          <Route path="user">
            <Route path=":id" element={<UserPage />} />
          </Route>

          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <BottomNavBar />
    </div>
  );
};

export default App;
