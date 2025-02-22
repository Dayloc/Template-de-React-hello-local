import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Home";
import Prueba from "./Prueba";
import Prueba2 from "./prueba2";
import UserPage from "./UserPage";

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Prueba />} path="/prueba" />
          <Route element={<Prueba2 />} path="/prueba2" />
          <Route element={<UserPage />} path="/userPage/:username" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
