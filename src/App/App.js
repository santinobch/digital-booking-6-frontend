import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import { Outlet } from "react-router-dom";


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
            path: "login",
            element: <Login />,
        },
        {
            path: "registrarse",
            element: <Register />,
        },
        ],
    },
]);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
