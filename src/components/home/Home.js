import React from "react";
import Banner from "./Banner";
import TopBody from "./TopBody";
import Merchandise from "./Merchandise";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Home() {

    const [reRender, setReRender] = useState(false);

    useEffect(() => {
        axios.get('/capnhatthoigian')
            .then(res => {
                setReRender(true);
            });
    }, [])

    return (
        <React.Fragment>
            <Banner />
            <TopBody />
            <Merchandise render = {reRender}/>
        </React.Fragment>
    );
} 