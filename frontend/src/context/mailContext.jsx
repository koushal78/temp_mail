import axios from "axios";
import { Toaster } from "react-hot-toast";
import { server } from "../config";
import { createContext, useContext, useState, useEffect, Children } from "react";


const MailContext = createContext();


export const MailContextProvider =({Children})=>{

    const[token, setToken] =useState([]);
    const [messageId, setmessageId]=useState([]);
    const [username, setUsername]=useState([]);
    const [password, setPassword]=useState([]);
    const [inbox, setInbox]=useState([]);

    // api/allMessage

    async function createMailbox() {
        try{
            const {data}= await axios.get( `${server}/api/mail`);
            console.log(data);
            setToken(data.token);
            setmessageId(data.id);

        }
        catch(err){
            console.log(err);
        }
    }
    async function getAllMessages({token}) {
        try{
            const {data}=await axios.post(`${server}/api/allMessage`,{
                body:{
                    "token": token
                }
            });

        }
        catch(err){
            console.log(err);
        }
    }
    async function getMessage({token, messageId}) {
        try{
            const {data}=await axios.post(`${server}/api/message`,{
                body:{
                    "token": token,
                    "messageId": messageId
                }
            });

        }
        catch(err){
            console.log(err);
        }
    }
    useEffect(() => {
        createMailbox();

    }, [])



    return <MailContext.Provider value={{token, setToken, messageId, setmessageId}}> {Children} <Toaster position="top-right" reverseOrder={false} /> </MailContext.Provider>



}

export const mailData = () => useContext(MailContext);