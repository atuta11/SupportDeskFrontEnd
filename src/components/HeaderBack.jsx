import { FaSignInAlt, FaSignOutAlt, FaUser} from 'react-icons/fa'
import {GrUserAdmin} from 'react-icons/gr'
import {RiAdminFill} from 'react-icons/ri'
import { Link } from 'react-router-dom'
import BackButton from '../components/BackButton'


function Header() {
 
  return (
    <header className='header'>
     <div className='logo' style={{ color: '#550073', fontWeight: 'bold' }}>
 
  <BackButton />
  <Link to='/'>Support Desk</Link>
 
</div>
      <ul>
            <li>
              <Link to='/login'>
                <FaSignInAlt /> Login
              </Link>
            </li>
            <li>
              <Link to='/register'>
                <FaUser /> Register
              </Link>
            </li>
            <li>
              <Link to='/admin-login'>
                <RiAdminFill /> Admin Login
              </Link>
            </li>
            <li>
              <Link to='/admin-register'>
                < GrUserAdmin/> Admin Register
              </Link>
            </li>
          
      </ul>
    </header>
  )
}

export default Header