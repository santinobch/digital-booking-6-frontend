import { createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import { Outlet } from "react-router-dom";

import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Producto from "./pages/producto/producto";
import Reserva from "./pages/reserva/reserva";



function Root() {
    return (
        <>
        <Header />
        <Outlet />
        <Footer /> 
        </>
    );
}

export const route = createBrowserRouter([{
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
            path: "reserva",
            element: <Reserva />,
        }
    ]
}]);