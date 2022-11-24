import "./App.scss";

import React, { useState } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { route } from "./Routes";

function App() {
    return (
        <RouterProvider router={route} />  
    );
}

export default App;
