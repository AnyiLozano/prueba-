import React from "react";
import {
  BrowserRouter as RouterDefault,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import { chooseLink } from "../helpers/datalayers";
import Home from "../views/home";
import Portada from "../views/portada";

const Router = () => {
  return (
    <RouterDefault>
      <Link
        onClick={() => {
          chooseLink("Home");
        }}
        to="/"
      >
        Home
      </Link>
      <Link
        onClick={() => {
          chooseLink("Portada");
        }}
        to="portada"
      >
        Portada
      </Link>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="portada" element={<Portada />} />
      </Routes>
    </RouterDefault>
  );
};

export default Router;
