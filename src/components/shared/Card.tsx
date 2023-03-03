import React from "react";

const Card = (): JSX.Element => {
  return (
    <div>
      <p>Titulo servicio</p>
      <img src="/" alt="servicio" />
      <div>
        <div>Cali</div>
        <div>Derecho</div>
      </div>
      <p>Descripción</p>
      <div>
        <div>Estrellas</div>
        <button>Enviar mensaje</button>
      </div>
    </div>
  );
};

export default Card;
