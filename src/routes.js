import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Err from '@/pages/Erro';
import Home from '@/pages/Home';
import Catalog from '@/pages/Catalog';
import SingleItem from '@/pages/SingleItem';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Err />}/>
        <Route path="/" element={<Home />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/single-item" element={<SingleItem />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
