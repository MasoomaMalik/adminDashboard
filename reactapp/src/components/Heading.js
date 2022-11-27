import { Box } from '@mui/system'
import React from 'react'

const Heading = ({justifyContent,title,color}) => {
  return (
   <>
   <Box sx={{
     color:color,
// color:'secondary',
    display:'flex',
    // dataId ? dataId : ""
    justifyContent:'center',
    fontSize:{md:'1.5rem',sx:'0.75rem'},
    margin:1,
   }}>

   <h3 
   className='lobster'
    >{title}</h3>
   </Box>
   </>
  )
}

export default Heading