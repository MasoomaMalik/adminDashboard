import { Box } from '@mui/system'
import React from 'react'

const Heading2 = ({justifyContent,title,color}) => {
  return (
   <>
   <Box sx={{
     color:"black",
// color:'secondary',
    display:'flex',
    // dataId ? dataId : ""
    justifyContent:'start',
    fontSize:{md:'1.5rem',sx:'0.75rem'},
    // fotWeight:700,
    margin:1,
   }}>

   <h3 
   className='comfortaa'
    >{title}</h3>
   </Box>
   </>
  )
}

export default Heading2