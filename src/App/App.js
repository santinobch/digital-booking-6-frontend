import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

import React, {useState} from "react";

import {AuthContext, UsuarioContext} from "./services/context";

function App() {
    const [usuario, setUsuario] = useState();
    const [auth, setAuth] = useState();
    
    const handleUsuarioLogin = user => {
        setUsuario(user)
    }

    const handleAuth = auth => {
        setAuth(auth)
    }

    return (
        <UsuarioContext.Provider value={ {usuario, handleUsuarioLogin} }>
            <AuthContext.Provider value={{auth, handleAuth}}>
                <RouterProvider router={route} />  
            </AuthContext.Provider>
        </UsuarioContext.Provider>
    );
}

export default App;
