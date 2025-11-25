import './DisplayMail.css';
import { IoCopyOutline } from "react-icons/io5";
import { LuRefreshCw } from "react-icons/lu";
const DisplayMail = ({ username, password }) => {


    return (
        <div className="box">
            <div className='mail-box'>
                
                <div className="input-wrapper">
                    <h3>Your Temp mail</h3>
                    <input type="text" id="myInput" value={username} readOnly />
                    <button><IoCopyOutline className='copyicon' /> Copy</button>
                </div>
                <div className="input-wrapper">
                    <h3>PassWord</h3>
                    <input type="text" id="myInput" value={password} readOnly/>
                    <button ><IoCopyOutline className='copyicon'/> Copy</button>
                </div>
                <button className="changeAdd"><LuRefreshCw  className="refreshicon" />Change address</button>
            </div>
        </div>
    )
}

export default DisplayMail;