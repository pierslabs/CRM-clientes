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

  return (
    <PedidoContext.Provider value={{ hola: "hola" }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
