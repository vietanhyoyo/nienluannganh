import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Chat from "./Chat";
import Footer from "./Footer";

export default function Client(){
    return(
        <React.Fragment>
            <Header />
            <div style={{ paddingTop: '62px' }}></div>
            <Outlet />
            <Footer />
            <Chat />
        </React.Fragment>
    );
} 
