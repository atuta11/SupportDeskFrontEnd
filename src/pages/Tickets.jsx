
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'


function Tickets() {

  return (
    <>
      <BackButton url='/'/>
      <h1>Tickets</h1>
      <div className='tickets'>
        <div className='ticket-headings'>
          <div>Date</div>
          <div>Product</div>
          <div>Status</div>
          <div>Action</div>
        </div>
      </div>
    </>
  )
}

export default Tickets