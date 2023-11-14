import { Link } from 'react-router-dom'

function TicketItem({ ticket }) {
  
  return (
    <div className='ticket'>
      <div>{new Date(ticket.createdAt).toLocaleString('en-US')}</div>
      <div>{ticket.product}</div>
      <div className={`status status-${ticket.status}`}>{ticket.status}</div>
      <div className='button-container'>
        <Link to={`/ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
          View
        </Link>
        
          <Link to={`/update-ticket/${ticket._id}`} className='btn btn-reverse btn-sm'>
            Edit
          </Link>
      
        <button  className="btn btn-sm btn-danger mx-3">Delete</button>
      </div>
    </div>
  )
}

export default TicketItem
