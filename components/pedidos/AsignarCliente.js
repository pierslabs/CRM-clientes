import React, { useState, useEffect } from "react";
import Select from "react-select";

const options = [
  { id: 1, nombre: "Lilian" },
  { id: 2, nombre: "Juan" },
  { id: 3, nombre: "Pedro" },
];

const AsignarCliente = () => {
  const [cliente, setCliente] = useState([]);

  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  const seleccionarCliente = (cliente) => {
    setCliente(cliente);
  };

  return (
    <div>
      <Select
        options={options}
        isMulti
        onChange={(opcion) => seleccionarCliente(opcion)}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) => opciones.nombre}
      />
    </div>
  );
};

export default AsignarCliente;
