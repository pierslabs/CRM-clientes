import Reactm, { useContext } from "react";
import Layout from "../components/Layout";
import AsignarCliente from "../components/pedidos/AsignarCliente";
import AsignarProductos from "../components/pedidos/AsignarProductos";
import ResumenPedido from "../components/pedidos/ResumenPedido";
import Total from "../components/pedidos/Total";

// Context pedido
import PedidoContext from "../context/pedidos/pedidoContext";

const NuevoPedido = () => {
  // utilizarContext y extraer sus valores
  const pedidoContext = useContext(PedidoContext);
  // console.log(pedidoContext);

  const { cliente, productos, total } = pedidoContext;

  const validarPedido = () => {
    // every itera cada objeto del array y todos deben de cumplir esa condicion  devuelve true o false
    return !productos.every((producto) => producto.cantidad > 0) ||
      total === 0 ||
      cliente.length === 0
      ? " opacity-50 cursor-not-allowed"
      : "";
  };

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AsignarCliente />
          <AsignarProductos />
          <ResumenPedido />
          <Total />
          <button
            type="button"
            className={`bg-blue-800 mt-5 w-full py-3 px-2 text-white font-bold hover:bg-blue-900 ${validarPedido()}`}
          >
            Crear Pedido
          </button>
        </div>
      </div>
    </Layout>
  );
};

export default NuevoPedido;
