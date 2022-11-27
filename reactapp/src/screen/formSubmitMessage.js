import { Button } from '@mui/material'
import { Box, ThemeProvider } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Heading from '../components/Heading'
import MyColorTheme from '../components/myColorTheme'

const FormSubmitMessage = () => {
 const navigate=useNavigate();
    return (
    <>
      <ThemeProvider theme={MyColorTheme}>
    
    <Box sx={{
            // padding: "2rem",
            width: "100vw",
            height: "100vh",
            backgroundColor: "#A04EF6",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection:"column"
          }}>
            <Heading title ={ "You have submitted the form successfully" }
            
            color={"primary"}/>
            <Button sx={{width:"40vw"}} variant="contained" color="secondary" onClick={(e)=>{
                navigate("/userRegistrationForm")
            }}>Submit Another Response</Button>

        
    </Box>
    </ThemeProvider>
    </>
  )
}

export default FormSubmitMessage