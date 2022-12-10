//React

import Booking from "./pages/booking/booking";
import CreateProduct from "./pages/createProduct/createProduct";
import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import MyBookings from "./pages/myBookings/myBookings";
import { Outlet } from "react-router-dom";
import Product from "./pages/product/product";
import ProtectedLoggedRoute from "./directives/ProtectedLoggedRoute";
import Register from "./pages/register/register";
import Succesfull from "./pages/succesfull/succesfull";
import { createBrowserRouter } from "react-router-dom";
import { useCookies } from "react-cookie";

//Components



//Directives


//Pages








//Cookies


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