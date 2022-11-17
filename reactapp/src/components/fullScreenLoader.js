import React from 'react'
import fullscreenloader from "../assets/fullscreenloader.gif"
import {Box} from "@mui/system"
import {CircularProgress,Typography} from "@mui/material"
const FullScreenLoader = () => {
  return (
<>
<Box sx={{width:"100vw",minHeight:"100vh",height:"100%", 
display:"flex", justifyContent:"center"}}>
<img
src={fullscreenloader}
// style={{ width: "500px", height: "500px" }}
></img>
{/* <CircularProgress />
<Typography>lofingdg</Typography> */}

</Box>
</>  )
}

export default FullScreenLoader