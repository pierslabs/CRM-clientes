import React from "react";
import Head from "next/head";
import Sidebar from "./Sidebar";
const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Crm -Aministarcion Clientes</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="bg-gray-200 min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="sm:w-2/3 xl:w-4/5 sm:min-h-screen p-5">
            {children}
          </main>
        </div>
      </div>
    </>
  );
};

export default Layout;