import React from "react";
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Hearder from './components/Header';
import Footer from './components/Footer';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Chat from "./components/Chat";
import Buy from "./components/buy/Buy";
import Admin from "./components/admin/Admin";
import Person from "./components/person/Person";
import Client from "./components/Client";
import PersonProfile from "./components/person/PersonProfile";
import PersonHistory from "./components/person/PersonHistory";

function App() {
  return (
    <React.Fragment>
      <Hearder />
      <div style={{ paddingTop: '62px' }}></div>
      <Routes>
        <Route path='/' element={<Client />} >
          <Route path='home' element={<Home />} />
          <Route path='cart/:id' element={<Cart />} />
          <Route path='buy/:id' element={<Buy />} />
          <Route path='admin/:id' element={<Admin />} />
          <Route path='person' element={<Person />} >
            <Route path='pro/:id' element={<PersonProfile />} />
            <Route path='his/:id' element={<PersonHistory />} />
          </Route>
        </Route>
      </Routes>
      <Footer />
      <Chat />
    </React.Fragment>
  );
}

export default App;
