import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import NewTicket from './pages/NewTicket';
import Tickets from './pages/Tickets';
import AdminLogin from './pages/AdminLogin';
import AdminRegister from './pages/AdminRegister';
import AdminResolve from './pages/AdminResolve';
import Ticket from './pages/Ticket';
import EditTicket from './components/EditTicket';

function App() {
  return (
    <>
       <Router>
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<Login />}/>
            <Route path='/register' element={<Register />}/>
            <Route path='/new-ticket' element = {<NewTicket/>} /> 
            <Route path='/tickets' element = {<Tickets/>} /> 
            <Route path='/ticket/:ticketId' element = {<Ticket/>} />
            <Route path='/update-ticket/:ticketId' element = {<EditTicket/>} /> 
            
            <Route path='/admin-login' element={<AdminLogin />}/>
            <Route path='/admin-register' element={<AdminRegister />}/>
            <Route path='/resolve-tickets' element={<AdminResolve />}/>
            
            
          </Routes>
        </div>
       </Router>
 
    </>
  );
}

export default App;

