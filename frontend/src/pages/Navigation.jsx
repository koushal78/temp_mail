import { Link ,useNavigate} from 'react-router-dom';
import './Navigation.css';
const Navigate=()=>{
    const navigate=useNavigate();
    return(
        <div className='header'>
            <div className="logo">
                <h1>TempMail</h1>
            </div>
            <ul>
                <li><Link to={'#'}>Home</Link></li>
                <li><Link to={'#'}>About</Link></li>
                <li><Link to={'#'}>Get The App</Link></li>
                <li><Link to={'#'}>About</Link></li>
                
            </ul>
        </div>
    )
}

export default Navigate;