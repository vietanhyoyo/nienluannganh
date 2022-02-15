import React from "react";
import Banner from "./Banner";
import TopBody from "./TopBody";
import Merchandise from "./Merchandise";

export default function Home(){
    return(
        <React.Fragment>
            <Banner />
            <TopBody />
            <Merchandise />
        </React.Fragment>
    );
} 