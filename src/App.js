import React from "react";
import { Routes,Route } from 'react-router-dom';
import './css/app.css';
import Hearder from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';


function App() {
  return (
    <React.Fragment>
      <Hearder />
      <div style={{paddingTop: '62px'}}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </React.Fragment>
  );
}

export default App;
