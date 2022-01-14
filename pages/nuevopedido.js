import Reactm, { useContext } from "react";
import Layout from "../components/Layout";
import AsignarCliente from "../components/pedidos/AsignarCliente";
import AsignarProductos from "../components/pedidos/AsignarProductos";
import ResumenPedido from "../components/pedidos/ResumenPedido";

// Context pedido
import PedidoContext from "../context/pedidos/pedidoContext";

const NuevoPedido = () => {
  // utilizarContext y extraer sus valores
  const pedidoContext = useContext(PedidoContext);
  // console.log(pedidoContext);

  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Crear Nuevo Pedido</h1>
      <div className="flex justify-center mt-5">
        <div className="w-full max-w-lg">
          <AsignarCliente />
          <AsignarProductos />
          <ResumenPedido />
        </div>
      </div>
    </Layout>
  );
};

export default NuevoPedido;
