import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { Outlet } from "react-router-dom";
import Producto from "./pages/producto/producto";
import Register from "./pages/register/register";
import ReservaExitosa from "./pages/reservaExitosa/reservaExitosa";
import UsuarioContext from "./services/context";

function Root() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registrarse",
        element: <Register />,
      },
      {
        path: "producto/:idProducto",
        element: <Producto />,
      },
      {
        path: "reservaExitosa",
        element: <ReservaExitosa />,
      },
    ],
  },
]);

function App() {
  const [usuario, setUsuario] = useState();

  const handleUsuarioLogin = (user) => {
    setUsuario(user);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, handleUsuarioLogin }}>
      <RouterProvider router={router} />
    </UsuarioContext.Provider>
  );
}

export default App;
