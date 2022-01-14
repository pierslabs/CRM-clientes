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

  const agregarProductos = (productosSeleccionados) => {
    // solucion al añadir producto y que reescriba la cantidad del anterior producto añadido

    let nuevoState;

    if (state.productos.length > 0) {
      nuevoState = productosSeleccionados.map((producto) => {
        const nuevoObjeto = state.productos.find(
          (productoState) => productoState.id === producto.id
        );

        return { ...producto, ...nuevoObjeto };
      });
    } else {
      nuevoState = productosSeleccionados;
    }
    dispatch({
      type: SELECCIONAR_PRODUCTO,
      payload: nuevoState,
    });
  };

  // MODIFICA CANTIDADES PRODUCTO
  const cantidadProductos = (nuevoProducto) => {
    dispatch({
      type: CANTIDAD_PRODUCTO,
      payload: nuevoProducto,
    });
  };

  return (
    <PedidoContext.Provider
      value={{
        productos: state.productos,
        agregarCliente,
        agregarProductos,
        cantidadProductos,
      }}
    >
      {children}
    </PedidoContext.Provider>
  );
};

export default PedidoState;
