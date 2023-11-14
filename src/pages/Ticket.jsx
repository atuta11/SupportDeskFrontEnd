import BackButton from '../components/BackButton'



function Ticket() {

  return (
    <div className='ticket-page'>
      <header className='ticket-header'>
        <BackButton url='/tickets' />
        <h2>
          Ticket ID: 
          
        </h2>
        <h3>
          Date Submitted:
        </h3>
        <h3>Product: </h3>
        <hr />
        <div className='ticket-desc'>
          <h3>Description of Issue</h3>
          <p>jkkd</p>
        </div>
      </header>
    </div>
  )
}

export default Ticket