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
import StaffAdmin from "./components/admin/StaffAdmin";
import ListProductAdmin from "./components/admin/ListProductAdmin";
import AdminAddUser from "./components/admin/AdminAddUser";
import AdminPromotion from "./components/admin/AdminPromotion";
import AdminInvoice from "./components/admin/AdminInvoice";
import AdminControllProductType from "./components/admin/AdminControllProductType";
import Login from "./components/login/Login";
import Signup from "./components/signup/Signup";
import Product from "./components/product/Product";
import AdminAddProduct from "./components/admin/AdminAddProduct";
import AdminStatistical from "./components/admin/AdminStatistical";
import Find from "./components/find/Find";
import FindSearch from "./components/find/FindSearch";

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
            <Route path='find/:id' element={<Find />} />
            <Route path='findsearch/:id' element={<FindSearch />} />
            <Route path='person' element={<Person />} >
              <Route path='profile' element={<PersonProfile />} />
              <Route path='history' element={<PersonHistory />} />
            </Route>
          </Route>
          <Route path='/admin' element={<Admin />}>
            <Route path='staff' element={<StaffAdmin />} />
            <Route path='adduser' element={<AdminAddUser />} />
            <Route path='invoice' element={<AdminInvoice />} />
            <Route path='promotion' element={<AdminPromotion />} />
            <Route path='producttype' element={<AdminControllProductType />} />
            <Route path='staff' element={<StaffAdmin />} />
            <Route path='listproduct' element={<ListProductAdmin />} />
            <Route path='adduser' element={<AdminAddUser />} />
            <Route path='invoice' element={<AdminInvoice />} />
            <Route path='promotion' element={<AdminPromotion />} />
            <Route path='addproduct' element={<AdminAddProduct />} />
            <Route path='Statistical' element={<AdminStatistical />} />
          </Route>
        </Routes>
      </React.Fragment>
    </LoginProvider>
  );
}

export default App;