import React from 'react'
import { useNavigate } from 'react-router-dom'
const Card = ({item}) => {
  const navigate = useNavigate()
  return (

  <div className="col-sm-12 col-lg-4 col-md-6">
    <div className="card mt-3">
    <div className="card-body">
              <h5 className="card-title fw-bold">Name:{item?.first_name}</h5>
              <p className="card-text">Gender:{item?.gender}</p> 
              <p className="card-text">Domain:{item?.domain}</p>        
              <p className="card-text fw-bold">Avalable:{item.available===true ? <><span className='text-success'>yes available</span></> : <><span className='text-warning'>  not available</span></>}</p>
              <button className="btn btn-primary ms-2 " onClick={()=>navigate(`/userDetails/${item._id}`)}>More Details</button>
              <button className="btn btn-success ms-3">
              Add team
              </button>
            </div>
    </div>
  </div>

  
  )
}

export default Card