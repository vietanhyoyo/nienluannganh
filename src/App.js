import React from "react";
import { Routes, Route } from 'react-router-dom';
import './css/app.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Buy from "./components/buy/Buy";
import Admin from "./components/admin/Admin";
import Person from "./components/person/Person";
import Client from "./components/Client";
import PersonProfile from "./components/person/PersonProfile";
import PersonHistory from "./components/person/PersonHistory";
import PersonAddress from "./components/person/PersonAddress";

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<Client />} >
          <Route path='home' element={<Home />} />
          <Route path='cart/:id' element={<Cart />} />
          <Route path='buy/:id' element={<Buy />} />
          <Route path='person' element={<Person />} >
            <Route path='profile/:id' element={<PersonProfile />} />
            <Route path='history/:id' element={<PersonHistory />} />
            <Route path='address/:id' element={<PersonAddress />} />
          </Route>
        </Route>
        <Route path='/admin/:id' element={<Admin />} ></Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;
