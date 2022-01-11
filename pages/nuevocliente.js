import React from "react";
import Layout from "../components/Layout";

const Nuevocliente = () => {
  return (
    <Layout>
      <h1 className="text-2xl text-gray-800 font-light">Clientes</h1>
      <div className="flex jsutify-center mt-5">
        <div className="w-full max-w-lg">
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="Nombre"
              >
                Nombre
              </label>
              <input
                type="Nombre"
                className="shadow apperance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight
              focus:outline-none focus:shadow-outline"
                id="Nombre"
                placeholder="Nombre"
                // onChange={formik.handleChange}
                // onBlur={formik.handleBlur}
                // value={formik.values.email}
              />
            </div>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Nuevocliente;
