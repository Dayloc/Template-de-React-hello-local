import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import { Link } from "react-router";
import UserPage from "./UserPage";

//create your first component
const Home = () => {
  return (
    <div className="text-center">
      <h1 className="text-center mt-5">Hello Rigo!</h1>
      <p>
        <img src={rigoImage} />
      </p>
      <a href="#" className="btn btn-success">
        If you see this green button... bootstrap is working...
      </a>
      <p>
        Made by <a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
        love!
      </p>
      <Link to="/prueba">Prueba</Link>
      <div>
        <Link to="/prueba2">Prueba2</Link>
      </div>
      <div>
        <Link to="/userPage/dayloc">UserPage</Link>
      </div>
    </div>
  );
};

export default Home;
