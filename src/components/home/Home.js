import React from "react";
import Banner from "./Banner";
import TopBody from "./TopBody";
import Merchandise from "./Merchandise";
import { useContext } from "react";
import { LoginContext } from "../../contexts/LoginContext";

export default function Home(){
    const loginState = useContext(LoginContext)
    console.log('contextHome : ' + loginState.loginstate)

    return(
        <React.Fragment>
            <Banner />
            <TopBody />
            <Merchandise />
        </React.Fragment>
    );
} 