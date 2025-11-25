import { useEffect } from "react";
import "./Inbox.css";
import { ImSpinner8 } from "react-icons/im";
import { mailData } from "../context/mailContext";

const Inbox = ({ getAllMessages }) => {
    const { inbox } = mailData();
    console.log(inbox);

    useEffect(() => {
        const interval = setInterval(() => {
            const token = localStorage.getItem("token");

            if (token) {
                getAllMessages({ token });
            }
        }, 10000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="inbox">
            <div className="title">
                <h2>Inbox</h2>
                <h2 className="refreshbtn">
                    <ImSpinner8 className="spin" /> auto refresh 10s
                </h2>
            </div>

            <table>
                <thead>
                    <tr>
                        <th>Sender</th>
                        <th>Subject</th>
                        <th>Time</th>
                    </tr>
                </thead>

                <tbody>
                    {inbox?.length === 0 ? (
                        <tr>
                            <td colSpan="3" style={{ textAlign: "center", padding: "20px" }}>
                                No messages found
                            </td>
                        </tr>
                    ) : (
                        inbox?.map((msg, i) => (
                            <tr key={i}>
                                <td>{msg.from}</td>
                                <td>{msg.subject || "(No Subject)"}</td>
                                <td>{new Date(msg.date).toLocaleString()}</td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Inbox;
