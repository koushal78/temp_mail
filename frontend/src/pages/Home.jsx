import Navigate from "./Navigation"
import Hero from "./Hero";
import DisplayMail from "./displayMail";
import Inbox from "./Inbox";
import { mailData } from "../context/mailContext";
import { useEffect } from "react";
const Home=()=>{
   const { username , password, getAllMessages} = mailData();
//    useEffect(()=>{
//         const token = localStorage.getItem("token");
//         getAllMessages({ token });
//    }, [])
    return (
        <div>
            <Navigate/>
            <Hero/>
            <DisplayMail username={username} password={password} />
            <Inbox getAllMessages={getAllMessages}/>
        </div>

    )
}

export default  Home;