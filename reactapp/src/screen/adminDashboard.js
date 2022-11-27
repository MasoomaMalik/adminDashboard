import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import MyResponsiveDrawer from '../components/drawer'

const Dashboard = () => {
  const [userId, setUserId]= useState("")
  const params=useParams()
  // setUserId(params.id)
console.log(params)
// useEffect(()=>{setUserId(params.id)},[])
  return (

    <>
    <MyResponsiveDrawer 
    userId={params.id}
    
    />
    
    </>
    )
}

export default Dashboard