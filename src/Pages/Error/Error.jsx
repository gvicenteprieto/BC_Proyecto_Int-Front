import React from "react";
import "./errorStyles.css";

const Error = () => {
  return (
    <div className="main__error">
      <h1>Este enlace no pertenece a la aplicación</h1>
      <h2>Por favor, verifique la ruta</h2>

      <img
        src="https://media.giphy.com/media/3o7aDcz7Y7aO3k0yM8/giphy.gif"
        alt="Error"
      />
    </div>
  );
};

export default Error;
