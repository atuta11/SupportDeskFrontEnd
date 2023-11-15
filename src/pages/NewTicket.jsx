import BackButton from '../components/BackButton'
import HeaderBack from '../components/HeaderBack'
import avatar from '../assets/avatar.png';
function NewTicket() {


  return (
    <>
      <HeaderBack/>
    
       <div className="mainContainer">
      <section className='heading mega newTicketTop'>
        <div className='box1'>
        <h1>Support Ticket</h1>   
        <p>Please fill out the form below</p>
        </div>
        <div className='box2'>
        <div className="avatar">
        <img src={avatar} alt="HOME IMAGE" />
        </div>
        </div>
      </section>

      <section className='form'>
        <div className='form-group'>
          <label htmlFor='name'>Customer Name</label>
          <input type='text' className='form-control'  />
        </div>
        <div className='form-group'>
          <label htmlFor='email'>Customer Email</label>
          <input type='text' className='form-control'  />
        </div>
        <form>
          <div className='form-group'>
            <label htmlFor='product'>Product</label>
            <select
              name='product'
              id='product'
             
            >
              <option value='iPhone'>iPhone</option>
              <option value='Macbook Pro'>Macbook Pro</option>
              <option value='iMac'>iMac</option>
              <option value='iPad'>iPad</option>
            </select>
          </div>
          <div className='form-group'>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
            ></textarea>
          </div>
          <div className='form-group'>
            <button className='btn btn-block' id='newTicketSub'>Submit</button>
          </div>
        </form>
      </section>
      </div>
    </>
  )
}

export default NewTicket