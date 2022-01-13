import React, { useState, useEffect } from "react";
import Select from "react-select";
import { gql, useQuery } from "@apollo/client";

const OBTENER_CLIENTES_USUARIO = gql`
  query obtenerClientesVendedor {
    obtenerClientesVendedor {
      id
      nombre
      apellido
      empresa
      email
    }
  }
`;

const AsignarCliente = () => {
  const [cliente, setCliente] = useState([]);
  const { data, loading, error } = useQuery(OBTENER_CLIENTES_USUARIO);

  useEffect(() => {
    console.log(cliente);
  }, [cliente]);

  const seleccionarCliente = (cliente) => {
    setCliente(cliente);
  };

  // resultados de la consulta
  if (loading) return null;

  const { obtenerClientesVendedor } = data;

  return (
    <div>
      <p className="mt-10 my-2 bg-white border-l-4 border-gray-800 text-gray-700 p-2 text-sm font-bold">
        1. Asigna un cliente al pedido
      </p>
      <Select
        className="mt-3"
        options={obtenerClientesVendedor}
        onChange={(opcion) => seleccionarCliente(opcion)}
        getOptionValue={(opciones) => opciones.id}
        getOptionLabel={(opciones) => opciones.nombre}
      />
    </div>
  );
};

export default AsignarCliente;
