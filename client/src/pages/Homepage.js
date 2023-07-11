import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Card from '../component/Card'
import { useDispatch, useSelector } from 'react-redux'
import { listUser } from '../action/userAction'
import { ToastContainer } from 'react-toastify';
import CreateUser from './CreateUser'
import axios from 'axios'

const Homepage = () => {
  const [modelopened, setModelOpened] = useState(false);
  // const [key,setKey]=useState()
  const[ search,setSearch]=useState(false)
  const [page, setpage]= useState(1)
  const [pagecount,setpagecount]=useState(0)
  
const dispatch= useDispatch()
const userList = useSelector((state)=>state.userList)
const{loading,error,users}= userList

  useEffect(()=>{
  dispatch(listUser(page))
  },[dispatch,page])

  useEffect(()=>{
    if(users){
      setpagecount(users?.pagination?.pagecount)
  
     }
  },[users])

  const handlePrivious=()=>{
    setpage((p)=>{
      if(p === 1) return p;
      return p - 1;
    })
  }

  const handleNext=()=>{
  setpage((p)=>{
    if(p === pagecount) return p;
    return p+1
  })
  }

 const searchHandler = async(e)=>{
 
   let key =(e.target.value)
   if(key){
    let result =await axios.get(`https://heliverse-back.onrender.com/api/users/search/${key}`)
    if(result){
      setSearch(result)
      console.log(search)
    }
   }else{
    window.location.reload()
   }
 

  // console.log(users)
  // console.log(result)
 }

  return (
    <div className='container-fluid'>
    <ToastContainer/>
    {/* create user */}
      <div className='button-container  d-flex col-12 col-md-11 col-lg-9 mx-auto'>

       <button  className=" m-3" onClick={() => setModelOpened(true)} >
              create User
            </button>
            <CreateUser
              modelopened={modelopened}
              setModelOpened={setModelOpened}
            />
       </div>
    <div className="container">
  <div className="d-flex col-12 col-md-6 col-lg-5 mx-auto">
    <input className="form-control me-2"  type="search" placeholder="Search"  onChange={searchHandler} />
  </div>
</div>


       {/* card container*/}
       <div className="container">
    <div className="row mt-5">
      <div className="col-9 col-sm-12 col-md-11 col-lg-12 mx-auto">
     
        {loading ? <h2>Loading...</h2> :
     
       <div className="row" >
       {!search ? (users?.user?.map((item)=>{
        return <Card item={item} key={item._id} />
       })):(search?.data?.map((item)=>{
        return <Card item={item} key={item._id} />
       }))}
       </div>
        }
      
        </div>
        </div>
        </div>
        <footer>
        page:{page}
        pagecount :{pagecount}
          <button disabled={page===1} onClick={handlePrivious}>Previous</button>
          <button disabled={page === pagecount} onClick={handleNext}>Next</button>
        </footer>
        </div>

    
  )
}

export default Homepage
