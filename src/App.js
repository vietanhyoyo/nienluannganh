import React from "react";
import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from "./contexts/LoginContext";
import './css/app.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Buy from "./components/buy/Buy";
import Admin from "./components/admin/Admin";
import Person from "./components/person/Person";
import Client from "./components/Client";
import PersonProfile from "./components/person/PersonProfile";
import PersonHistory from "./components/person/PersonHistory";
import AdminPromotion from "./components/admin/AdminPromotion";
import AdminInvoice from "./components/admin/AdminInvoice";
import AdminControllProductType from "./components/admin/AdminControllProductType";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Product from "./components/product/Product";
import StaffAdmin from "./components/admin/StaffAdmin"
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminStatistical from "./components/admin/AdminStatistical";
import AdminAddUser from "./components/admin/AdminAddUser";
import ListProductAdmin from "./components/admin/ListProductAdmin"

function App() {
  return (
    <LoginProvider>
      <React.Fragment>
        <Routes>
          <Route path='/' element={<Client />} >
            <Route path='/' element={<Home />} />
            <Route path='cart/:id' element={<Cart />} />
            <Route path='buy/:id' element={<Buy />} />
            <Route path='product/:id' element={<Product />} />
            <Route path='signup' element={<Signup />} />
            <Route path='login' element={<Login />} />
            <Route path='person' element={<Person />} >
              <Route path='profile/:id' element={<PersonProfile />} />
              <Route path='history/:id' element={<PersonHistory />} />
            </Route>
          </Route>
          <Route path='/admin' element={<Admin />}>
            
            <Route path='AdminAddUser' element={<AdminAddUser />} />
            <Route path='staff' element={<StaffAdmin />} />
            <Route path='invoice' element={<AdminInvoice />} />
            <Route path='promotion' element={<AdminPromotion />} />
            <Route path='producttype' element={<AdminControllProductType />} />
            <Route path='addproduct' element={<AdminAddProduct />} />
            <Route path='Statistical' element={<AdminStatistical/>} />
            <Route path='product' element={<ListProductAdmin/>} />
            <Route path='invoice' element={<AdminInvoice />} />
            <Route path='promotion' element={<AdminPromotion />} />
   
          </Route>
        </Routes>
      </React.Fragment>
    </LoginProvider>
  );
}

export default App;