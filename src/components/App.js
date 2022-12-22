import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home';
import Lodging from '../pages/Lodging';
import About from '../pages/About';
import NotFound from '../pages/NotFound';
//import Data from '../data/Data.json'



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Lodging/:id' element={<Lodging />}></Route>
        <Route path='/*' element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  ) 
}

export default App;

