import React from "react";
import { useParams } from "react-router";

const UserPage = () => {
  const { username } = useParams();
  console.log(username);

  return (
    <div className="container">
      <p>hola soy la pagina de : {username}</p>
    </div>
  );
};

export default UserPage;
