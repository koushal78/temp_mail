import axios from "axios";
import { Toaster } from "react-hot-toast";
import { server } from "../config";
import { createContext, useContext, useState, useEffect, Children } from "react";


const MailContext = createContext();


export const MailContextProvider = ({ children  }) => {

    // const [token, setToken] = useState([]);
    const [messageId, setmessageId] = useState([]);
    const [username, setUsername] = useState([]);
    const [password, setPassword] = useState([]);
    const [inbox, setInbox] = useState([]);

    // api/allMessage

    async function createMailbox() {
        try {
            const { data } = await axios.get(`${server}/api/mail`);
            // Extract data correctly from 'data.mail'
            console.log(data.mail);
            // setToken(data.mail.token);
            localStorage.setItem("token", data.mail.token);
            setmessageId(data.mail.id);
            setUsername(data.mail.username);
            setPassword(data.mail.password);

        }
        catch (err) {
            console.log(err);
        }
    }
    async function getAllMessages(token) {
        try {
            console.log(token);
            const { data } = await axios.post(`${server}/api/allMessage`, { token });
            console.log(data);
            if (data?.inbox?.messages) {
            setInbox(data.inbox.messages); // store inbox messages
            // console.log(data.inbox.messages);
        }

        }
        catch (err) {
            console.log(err);
        }
    }
    async function getMessage({ token, messageId }) {
        try {
            const { data } = await axios.post(`${server}/api/message`, { token, messageId });
            console.log(data);

        }
        catch (err) {
            console.log(err);
        }
    }
    useEffect(() => {
        createMailbox();

    }, [])



    return <MailContext.Provider value={{messageId, setmessageId, username, setUsername, password, setPassword, getAllMessages, getMessage, inbox}}> {children } <Toaster position="top-right" reverseOrder={false} /> </MailContext.Provider>



}

export const mailData = () => useContext(MailContext);