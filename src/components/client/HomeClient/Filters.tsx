import React from "react";

const Filters = () => {
  return (
    <div>
      Filtrar por:
      <div>
        <select>
          <option value="1">Ubiación</option>
        </select>
        <select>
          <option value="2">Especialidad</option>
        </select>
        <select>
          <option value="3">Subespecialidad</option>
        </select>
        <select>
          <option value="4">Calificación</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
