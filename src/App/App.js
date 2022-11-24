import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

import {AuthContext, UsuarioContext} from "./services/context";

function App() {
    const [usuario, setUsuario] = useState();
    const [auth, setAuth] = useState();
    
    const handleUsuario = usuario => {
        setUsuario(usuario)
    }

    const handleAuth = auth => {
        setAuth(auth)
    }

    return (
        <UsuarioContext.Provider value={ {usuario, handleUsuario} }>
            <AuthContext.Provider value={ {auth, handleAuth} }>
                <RouterProvider router={route} />  
            </AuthContext.Provider>
        </UsuarioContext.Provider>
    );
}

export default App;
