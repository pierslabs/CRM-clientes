import React, { useReducer } from "react";
import PedidoContext from "./pedidoContext";
import PedidoReducer from "./pedidoReducer";

import {
  SELECCIONAR_CLIENTE,
  SELECCIONAR_PRODUCTO,
  CANTIDAD_PRODUCTO,
} from "../../types";

const PedidoState = ({ children }) => {
  // state pedido
  const initialstate = {
    cliente: {},
    productos: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(PedidoReducer, initialstate);

  // modificaCliente

  const agregarCliente = (cliente) => {
    // console.log(cliente);
    dispatch({
      type: SELECCIONAR_CLIENTE,
      payload: cliente,
    });
  };

  return (
    <PedidoContext.Provider value={{ agregarCliente }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
