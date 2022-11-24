import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

import React, {useState} from "react";

import {UsuarioContext} from "./services/context";

function App() {
    const [usuario, setUsuario] = useState();
    
    const handleUsuarioLogin = user => {
        setUsuario(user)
    }

    return (
        <UsuarioContext.Provider value={ {usuario, handleUsuarioLogin} }>
            <RouterProvider router={route} />  
        </UsuarioContext.Provider>
    );
}

export default App;
