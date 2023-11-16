import {RiAdminFill} from 'react-icons/ri'
//import Header from '../components/Header'
import HeaderBack from '../components/HeaderBack'
function AdminLogin() {


  return (
    <>
    <HeaderBack/>
    <div className="pageContainer">
      <section className='heading'>
        <h1>
          <RiAdminFill /> Admin Login
        </h1>

        <p style={{ color: 'red', textDecoration: "underline" }} >
          Only admins should use this page
        </p>
    
      </section>

      <section className='form'>
        <form >
          <div className='form-group'>
            <input
              type='email'
              className='form-control'
              id='email'
              name='email'
              placeholder='Enter your email'
              required
            />
          </div>
          <div className='form-group'>
            <input
              type='password'
              className='form-control'
              id='password'
              name='password'
              placeholder='Enter password'
              required
            />
            </div>
            <div className='form-group'>
            <input
              type='String'
              className='form-control'
              id='key'
              name='key'
              placeholder='Enter secret key shared by company'
              required
            />
          </div>
          <div className='form-group'>
            <button className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
      </div>
    </>
  )
}

export default AdminLogin