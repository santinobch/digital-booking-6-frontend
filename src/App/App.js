import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

import { LoggedContext } from "./Context"

function App() {
    const [logged, setLogged] = useState(false);
    
    const handlelogged = (log) => {
        setLogged(log)
    }

    return (
        <LoggedContext.Provider value={ {logged, handlelogged} }>
            <RouterProvider router={route} />  
        </LoggedContext.Provider>
    );
}

export default App;
