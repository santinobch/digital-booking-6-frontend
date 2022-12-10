//React
import { createBrowserRouter } from "react-router-dom";
import { Outlet } from "react-router-dom";

//Components
import Footer from "./components/footer/footer";
import Header from "./components/header/header";

//Directives
import ProtectedLoggedRoute from "./directives/ProtectedLoggedRoute";

//Pages
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import Register from "./pages/register/register";
import Product from "./pages/product/product";
import Booking from "./pages/booking/booking";
import SuccesfullBooking from "./pages/succesfullBooking/succesfullBooking";
import CreateProduct from "./pages/createProduct/createProduct";

//Cookies
import { useCookies } from 'react-cookie';

function Root() {
  const cookieOptions = {
    //Accesable in all the site
    path: "/",
    //One week expiration
    expires: 60 * 60 * 24 * 7,
  };

  const [cookie] = useCookies([], [], cookieOptions);

  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export const route = createBrowserRouter([
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
            element: 
            <ProtectedLoggedRoute redirect="/home" checkUnlogged>
                <Login />
            </ProtectedLoggedRoute>
        },
        {
            path: "register",
            element: 
            <ProtectedLoggedRoute redirect="/home" checkUnlogged>
                <Register />
            </ProtectedLoggedRoute>
        },
        {
            path: "product/:idProduct",
            element: <Product />,
        },
        {
            path: "product/:idProduct/booking",
            element: 
            <ProtectedLoggedRoute redirect="/login">
                <Booking />
            </ProtectedLoggedRoute>
        },
        {
            path: "succesfulBooking",
            element: <SuccesfullBooking />,
        },
        {
            path: "createProduct",
            element: 
            <ProtectedLoggedRoute role="Administrador" redirect="/home">
                <CreateProduct />
            </ProtectedLoggedRoute>
        }
    ]
}]);