import { Box } from '@mui/system'
import React from 'react'

const Heading = ({title}) => {
  return (
   <>
   <Box sx={{
     color:'#9c27b0',
// color:'secondary',
    display:'flex',
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