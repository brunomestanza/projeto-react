import {
  createBrowserRouter,
} from "react-router-dom";
import { Contatos } from "./Contatos";
import { Home } from "./Home";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/contatos",
    element: <Contatos />,
  },
]);