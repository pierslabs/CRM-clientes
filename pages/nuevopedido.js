import React, { useContext, useState } from "react";
import Layout from "../components/Layout";
import AsignarCliente from "../components/pedidos/AsignarCliente";
import AsignarProductos from "../components/pedidos/AsignarProductos";
import ResumenPedido from "../components/pedidos/ResumenPedido";
import Total from "../components/pedidos/Total";
import { gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

// Context pedido
import PedidoContext from "../context/pedidos/pedidoContext";
import Swal from "sweetalert2";

const NUEVO_PEDIDO = gql`
  mutation nuevoPedido($input: PedidoInput) {
    nuevoPedido(input: $input) {
      id
    }
  }
`;

const NuevoPedido = () => {
  const [mensaje, setMensaje] = useState(null);

  const router = useRouter();

  // utilizarContext y extraer sus valores
  const pedidoContext = useContext(PedidoContext);
  // console.log(pedidoContext);

  // MUTATION
  const [nuevoPedido] = useMutation(NUEVO_PEDIDO);

  const { cliente, productos, total } = pedidoContext;

  const validarPedido = () => {
    // every itera cada objeto del array y todos deben de cumplir esa condicion  devuelve true o false
    return !productos.every((producto) => producto.cantidad > 0) ||
      total === 0 ||
      cliente.length === 0
      ? " opacity-50 cursor-not-allowed"
      : "";
  };

  const crearNuevoPedido = async () => {
    // eliminar campos de producto que no son necesarios
    const pedido = productos.map(
      ({ existencia, __typename, creado, ...producto }) => producto
    );
    console.log(pedido);
    try {
      const { data } = await nuevoPedido({
        variables: {
          input: {
            cliente: cliente.id,
            total,
            pedido,
          },
        },
      });
      router.push("/pedidos");
      Swal.fire("Creado!", "Pedido creado satisfactoriamente", "success");
    } catch (error) {
      setMensaje(error.message);
      setTimeout(() => {
        setMensaje(null);
      }, 2000);
    }
  };

  const mostrarMensaje = () => {
    return (
      <div>
        <p className="bg-white py-2 px-3 w-full my-3 max-w-sm text-center mx-auto">
          {mensaje}
        </p>
      </div>
    );
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      {mensaje && mostrarMensaje()}
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AsignarCliente />
          <AsignarProductos />
          <ResumenPedido />
          <Total />
          <button
            type="button"
            className={`bg-blue-800 mt-5 w-full py-3 px-2 text-white font-bold hover:bg-blue-900 ${validarPedido()}`}
            onClick={() => crearNuevoPedido()}
          >
            Crear Pedido
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NuevoPedido;
