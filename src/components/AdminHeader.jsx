import { Link } from "react-router-dom"
import {FaSignOutAlt} from 'react-icons/fa'

function AdminHeader() {
    
    return(
        <header className='header'>
        <div className='logo' style={{color: '#8800cc'}}>
            <Link to='/'>Support Desk</Link>
        </div>
        <ul>
            <li>
                <button className='btn'>
                <FaSignOutAlt /> Logout
                </button>
            </li>
        </ul>
        </header>
    )
}

export default AdminHeader