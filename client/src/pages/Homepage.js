import React, { useEffect, useState } from 'react'
import "./Homepage.css"
import Card from '../component/Card'
import { useDispatch, useSelector } from 'react-redux'
import { listUser } from '../action/userAction'
import CreateUser from './CreateUser'
const Homepage = () => {
  const [modelopened, setModelOpened] = useState(false);
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
   //   console.log(pagecount)
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

 

  return (
    <div className='container-fluid'>
    {/* create user */}
       <div className='button-container'>
       <button  className=" m-3" onClick={() => setModelOpened(true)} >
              create User
            </button>
            <CreateUser
              modelopened={modelopened}
              setModelOpened={setModelOpened}
            />
       </div>
       <div className=''>
       </div>

       {/* card container*/}
       <div className="container">
    <div className="row mt-5">
      <div className="col-9 col-sm-12 col-md-11 col-lg-12 mx-auto">
     
        {loading ? <h2>Loading...</h2> :
     
       <div className="row" >
       {users?.user?.map((item)=>{
        return <Card item={item} key={item._id}/>
       })}
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