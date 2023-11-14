import BackButton from "./BackButton"


function EditTicket() {
  
  return (
    <div className='ticket-page'>
    <header className='ticket-header'>
      <BackButton />
      <h2>
        Ticket ID: 
      </h2>
      <h3>
        Date Submitted: 
      </h3>
      <h3>Product: </h3>
      <hr />

      <div className='form-group'style={{marginTop:"20px"}}>
            <label htmlFor='description'>Description of the issue</label>
            <textarea
              name='description'
              id='description'
              className='form-control'
              placeholder='Description'
            ></textarea>
          </div>
      
    </header>
        <form>
          <div className='form-group'>
            <button className='btn btn-block' style={{ backgroundColor: 'blue', color: 'white' }}>Save</button>
          </div>
        </form>
    </div>
  )
}

export default EditTicket
