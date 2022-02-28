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
import StaffAdmin from "./components/admin/StaffAdmin";
import OrderAdmin from "./components/admin/OrderAdmin";
import AdminAddUser from "./components/admin/AdminAddUser";
import AdminPromotion from "./components/admin/AdminPromotion";
import AdminInvoice from "./components/admin/AdminInvoice";

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
          </Route>
        </Route>
        <Route path='/admin' element={<Admin />}>
          <Route path='staff/:id' element={<StaffAdmin />} />
          <Route path='order/:id' element={<OrderAdmin />} />
          <Route path='adduser/:id' element={<AdminAddUser />} />
          <Route path='invoice/:id' element={<AdminInvoice />} />
          <Route path='promotion/:id' element={<AdminPromotion />} />
        </Route>
      </Routes>
    </React.Fragment>
  );
}

export default App;