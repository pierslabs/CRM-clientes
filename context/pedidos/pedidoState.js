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
  const initialState = {
    cliente: {},
    productos: [],
    total: 0,
  };

  const [state, dispatch] = useReducer(PedidoReducer, initialState);

  //  MODIFICA LOS CLIENTES

  const agregarCliente = (cliente) => {
    dispatch({
      type: SELECCIONAR_CLIENTE,
      payload: cliente,
    });
  };

  // MODIFICA LOS PRODUCTOS

  const agregarProductos = (producto) => {
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: producto,
    });
  };

  return (
    <PedidoContext.Provider value={{ agregarCliente, agregarProductos }}>
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
