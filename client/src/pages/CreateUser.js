import React, { useState } from 'react'
import Modal from "react-bootstrap/Modal";
import { useDispatch } from 'react-redux';
import { create } from '../action/userAction';
const CreateUser = ({ modelopened, setModelOpened }) => {
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState('');
    const [domain, setDomain] = useState('');
    const dispatch= useDispatch()

    const handleSubmit =(e)=>{
        e.preventDefault()
        dispatch(create(first_name,last_name,email,gender,domain));
        setFirstName("") 
        setLastName("")
        setEmail("")
        setDomain("")
        setGender("") 
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
            <h3>Create User</h3>
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
          required
        />
        </div>

        <div className="mb-3">
         <input
          type="text"
          placeholder="Last Name"
          value={last_name}
          className="form-control"
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        </div>
        <div className="mb-3">
        <input
          type="email"
          placeholder="Email"
          value={email}
          className="form-control"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </div>
        <div className="mb-3">
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value) } required>
            <option value="">Select</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Domain:
          <select value={domain} onChange={(e) => setDomain(e.target.value)} required>
            <option value="">Select</option>
            <option value="Finance">Finance</option>
            <option value="Marketing">Marketing</option>
            <option value="Sales">Sales</option>
            <option value="Management">Management</option>
            <option value="IT">IT</option>
            <option value="UI Designing">UI Designing</option>
          </select>
        </label>
        </div> 
        <button type="submit" className="btn btn-primary">
               create user
              </button>
          </form> 
        </Modal.Body>
      </Modal>
    </div>
  )
}

export default CreateUser
