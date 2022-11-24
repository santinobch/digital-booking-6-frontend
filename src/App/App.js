import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

import UsuarioContext from "./services/context";

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
