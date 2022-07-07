import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Err from "@/pages/Erro";
import Home from "@/pages/Home";
import Catalog from "@/pages/Catalog";
import Car from "@/pages/Car";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err />} />
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/car" element={<Car />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
