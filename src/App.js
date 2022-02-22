import React from "react";
import { Routes,Route } from 'react-router-dom';
import './css/app.css';
import Hearder from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Chat from "./components/Chat";
import Buy from "./components/buy/Buy";
import Admin from "./components/admin/Admin";
import Person from "./components/person/Person";

function App() {
  return (
    <React.Fragment>
      <Hearder />
      <div style={{paddingTop: '62px'}}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart/:id' element={<Cart />} />
        <Route path='/buy/:id' element={<Buy />} />
        <Route path='/admin/:id' element={<Admin />} />
        <Route path='/person/:id' element={<Person />} />
      </Routes>
      <Footer />
      <Chat />
    </React.Fragment>
  );
}

export default App;
