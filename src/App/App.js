import "./App.scss";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Footer from "./components/footer/footer";
import Header from "./components/header/header";
import Home from "./pages/home/home";
import Login from "./pages/login/login";
import { Outlet } from "react-router-dom";
import Registro from "./pages/login/registrarse";

function Root() {
  return (
    <>
      {/* all the other elements */}
      <div id="detail">
        <Header />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "registrarse",
        element: <Registro />,
      },
    ],
  },
]);
function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
