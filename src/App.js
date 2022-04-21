import React from "react";
import { Routes, Route } from 'react-router-dom';
import { LoginProvider } from "./contexts/LoginContext";
import { CartProvider } from "./contexts/CartContext";
import './css/app.css';
import Home from './components/home/Home';
import Cart from './components/cart/Cart';
import Buy from "./components/buy/Buy";
import PaySuccess from "./components/buy/PaySuccess";
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
import Find from "./components/find/Find";
import FindSearch from "./components/find/FindSearch";
import AdminChat from "./components/admin/AdminChat";
import ListProductAdmin from "./components/admin/ListProductAdmin"
import AdminStaffAdd from "./components/admin/AdminStaffAdd";
import AdminStaffInfo from "./components/admin/adminstaff/AdminStaffInfo";
import Charjs from "./components/admin/listproductadmin/Charjs";

function App() {
  return (
    <LoginProvider>
      <CartProvider>
        <React.Fragment>
          <Routes>
            <Route path='/' element={<Client />} >
              <Route path='/' element={<Home />} />
              <Route path='cart' element={<Cart />} />
              <Route path='buy' element={<Buy />} />
              <Route path='paysuccess' element={<PaySuccess />} />
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
              <Route path='adminchat' element={<AdminChat />} />
              <Route path='staff' element={<StaffAdmin />} />
              <Route path='invoice' element={<AdminInvoice />} />
              <Route path='producttype' element={<AdminControllProductType />} />
              <Route path='addproduct' element={<AdminAddProduct />} />
              <Route path='Statistical' element={<AdminStatistical />} />
              <Route path='product' element={<ListProductAdmin />} />
              <Route path='promotion' element={<AdminPromotion />} />
              <Route path='AddUser' element={<AdminStaffAdd />} />
              <Route path='infomation' element={<AdminStaffInfo />} />
              <Route path='charjs' element={<Charjs/>}/>
            </Route>
          </Routes>
        </React.Fragment>
      </CartProvider>
    </LoginProvider>
  );
}

export default App;