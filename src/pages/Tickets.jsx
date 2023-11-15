import HeaderBack from '../components/HeaderBack'
import BackButton from '../components/BackButton'
import TicketItem from '../components/TicketItem'


function Tickets() {

  return (
    <>
      <HeaderBack url='/'/>

      <h1> Your Tickets</h1>
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