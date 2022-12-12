import "./App.scss";

//React libraries
import React from "react";
import { RouterProvider } from "react-router-dom";
import { route } from "./Routes";

//Cookies
import { CookiesProvider } from 'react-cookie';
import Cookies from "./Cookies";

function App() {

    return (
        <CookiesProvider>
            <RouterProvider router={route} />  
        </CookiesProvider>
    );
}

export default App;
