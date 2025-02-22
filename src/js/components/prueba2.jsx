import React from "react";
import { Link, useNavigate } from "react-router";

const Prueba2 = () => {
  const navigate = useNavigate();

  return (
    <div className="container bg-warning mt-3">
      <h1>Componente Prueba2</h1>
      <Link to="/"> Home</Link>
      <div>
        <button onClick={() => navigate("/")}>Home</button>
      </div>
    </div>
  );
};

export default Prueba2;
