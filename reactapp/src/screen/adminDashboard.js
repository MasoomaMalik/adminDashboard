import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MyResponsiveDrawer from '../components/drawer'
import { checkUser } from '../config/firebaseMethods'

const Dashboard = () => {
  const [userId, setUserId]= useState("")
  const[isUser,setIsUser]=useState(false)
  const params=useParams()
  // setUserId(params.id)
console.log(params)
const navigate=useNavigate();
useEffect(()=>{
  
  // setUserId(params.id)}
  checkUser().
  then((res)=>{console.log(res)
  if(params.id===res){
    console.log("same")
    setIsUser(true)
  }
  })
  .catch((err)=>{console.log(err)})
},[])
  return (

    <>

   {
    isUser?<MyResponsiveDrawer 
    userId={params.id}
    
    />: null
   } 
    
    </>
    )
}

export default Dashboard