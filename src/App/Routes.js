import { createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";

import { Outlet } from "react-router-dom";

//Directives
import ProtectedLoggedRoute from "./directives/ProtectedLoggedRoute";

//Pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Producto from "./pages/producto/producto";
import Reserva from "./pages/reserva/reserva";
import ReservaExitosa from "./pages/reservaExitosa/reservaExitosa";



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
            element: 
            <ProtectedLoggedRoute redirect="/home" checkUnlogged>
                <Login />
            </ProtectedLoggedRoute>
        },
        {
            path: "registrarse",
            element: 
            <ProtectedLoggedRoute redirect="/home" checkUnlogged>
                <Register />
            </ProtectedLoggedRoute>
        },
        {
            path: "producto/:idProducto",
            element: <Producto />,
        },
        {
            path: "producto/:idProducto/reserva",
            element: 
            <ProtectedLoggedRoute redirect="/login">
                <Reserva />
            </ProtectedLoggedRoute>
        },
        {
            path: "reservaExistosa",
            element: <ReservaExitosa />,
        }
    ]
}]);