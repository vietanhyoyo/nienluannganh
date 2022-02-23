import React from "react";
import { Outlet } from "react-router-dom";


export default function Client(){
    return(
        <React.Fragment>
            <Outlet />
        </React.Fragment>
    );
} 