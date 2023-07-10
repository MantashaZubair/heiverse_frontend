import React, { useEffect, useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';
import {  userupdate } from '../action/userAction';
import {useNavigate} from "react-router-dom";
const EditUser = ({modelopened, setModelOpened, id,user}) => {
  console.log(user?._id)
  console.log(user?.first_name)
  // console.log(users?.user?.first_name)
    const [first_name, setFirstName] = useState(user?.first_name);
    const [last_name, setLastName] = useState(user?.last_name);
    const [email, setEmail] = useState(user?.email);
    const [gender, setGender] = useState(user?.gender);
    const [domain, setDomain] = useState(user?.domain);
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const handleSubmit = (e)=>{   
    e.preventDefault()
    dispatch(userupdate(id,first_name,last_name,email,gender,domain));
    navigate("/")
    setModelOpened(false); 
    }
  
    
    
  return (
    <div>
    <Modal
      show={modelopened}
      onHide={() => {
        setModelOpened(false);
      }}
      size="md"
    >
      <Modal.Header closeButton>
        <Modal.Title>
          <h3>Edit User</h3>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
       
        <form onSubmit={handleSubmit}> 
        <div className="mb-3">
      <input
        type="text"
        placeholder=" First Name"
        value={first_name}
        className="form-control"
        onChange={(e) => setFirstName(e.target.value)}
      />
      </div>

      <div className="mb-3">
       <input
        type="text"
        placeholder="Last Name"
        value={last_name}
        className="form-control"
        onChange={(e) => setLastName(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <input
        type="email"
        placeholder="Email"
        value={email}
        className="form-control"
        onChange={(e) => setEmail(e.target.value)}
      />
      </div>
      <div className="mb-3">
      <label>
        Gender:
        <select value={gender} onChange={(e) => setGender(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Domain:
        <select value={domain} onChange={(e) => setDomain(e.target.value)}>
          <option value="">Select</option>
          <option value="male">Finance</option>
          <option value="female">Marketing</option>
          <option value="other">Sales</option>
          <option value="other">Management</option>
          <option value="other">IT</option>
          <option value="other">UI Designing</option>
        </select>
      </label>
      </div> 
      <button type="submit"  className="btn btn-primary bg-success">
             update
            </button>
          </form>
      </Modal.Body>
    </Modal>
  </div>
  )
}

export default EditUser
