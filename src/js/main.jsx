import React from "react";
import ReactDOM from "react-dom/client";

// Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";

// index.css
import "./../styles/index.css"; // Asegúrate de que la ruta sea correcta

// Components
import { Layout } from "./components/layout"; // Asegúrate de que el componente esté correctamente exportado

// Crear el root y renderizar la aplicación
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Layout />
  </React.StrictMode>
);
