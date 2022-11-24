import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

function App() {
    const [usuario, setUsuario] = useState();
    
    const handleUsuario = usuario => {
        setUsuario(usuario)
    }

    return (
        <UsuarioContext.Provider value={ {usuario, handleUsuario} }>
            <RouterProvider router={route} />  
        </UsuarioContext.Provider>
    );
}

export default App;
