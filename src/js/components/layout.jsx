import React from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import  Home  from "./Home";
import Prueba from './Prueba'

export const Layout = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
          <Route element={<Prueba />} path="/prueba" />
          <Route element={<h1>Not found!</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
