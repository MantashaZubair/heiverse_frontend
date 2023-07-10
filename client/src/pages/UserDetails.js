import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { userdetails } from '../action/userAction'
import { useNavigate, useParams } from 'react-router-dom'
import EditUser from './EditUser'
import axios from 'axios'



const UserDetails = () => {
    const [modelopened, setModelOpened] = useState(false);
    const navigate=useNavigate()
    const dispatch= useDispatch()
    const userDetails = useSelector((state)=>state.userDetails)
    const{users} = userDetails
     console.log(users)
    const params= useParams()
    useEffect(()=>{
      dispatch(userdetails(params.id))
    },[dispatch])


    const onDeleteHandler = async () => {
      try {
        await axios.delete(
          `https://heliverse-back.onrender.com/api/users/${params.id}`
        );
        navigate("/")
        
      } catch (error) {
        console.log(error);
      }
    };

    const gobackHandler =()=>{
      navigate("/")
      window.location.reload(false)
    }
  return (
    <div className='container'>
       <div className="card pb-4 shadow">
       <div className='row ms-2 m-md-2   '>
            <div className='col-md-12 col-12 product-details-info '>
                <h1 className='text-center mt-4 fw-bold'> User Details</h1> 
                <h6>Avatar   :  <img src={users?.user?.avatar} alt='avatar'/></h6>
                <h6>FirstName :  {users?.user?.first_name}</h6>
                <h6>LastName  :   {users?.user?.last_name}</h6>
                <h6>Domain    :   {users?.user?.domain}</h6>
                 <h6>Email    :   {users?.user?.email}</h6> 
                 <h6>Gender   :   {users?.user?.gender}</h6> 
                 <h6>Available :  {users?.user?.available===true ? <><span className='text-success'>yes available</span></> : <><span className='text-warning'>  not available</span></>}</h6>
                <button className="btn btn-secondary ms-1 mt-5 bg-success"  >Add Item</button>
                <button className="btn btn-secondary ms-1 mt-5 bg-primary" onClick={gobackHandler}  >Go to gome page</button>
                <button className="btn btn-secondary ms-1 mt-5 bg-danger" onClick={onDeleteHandler} >Delete</button>
                <button className="btn btn-secondary ms-1 mt-5 bg-secondary" onClick={() => setModelOpened(true)} >Edit</button>
                <EditUser modelopened={modelopened} setModelOpened={setModelOpened} id={params.id} user={users?.user}/> 
            </div>
        </div>
       </div> 
    </div>
  )
}

export default UserDetails
