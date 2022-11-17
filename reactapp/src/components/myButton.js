import React from 'react'
import {
    Button,
    CircularProgress,
  } from "@mui/material";
const MyButton = ({variant,onClick, type,disabled,isLoading,label,width,height}) => {
  return (
   <>
    <Button
                sx={{ marginY: 1, width:{width}, height:{height} }}
                variant={variant}
                type={type}
                disabled={isLoading}
                onClick={onClick}
              >
                {isLoading ? <CircularProgress /> : <p>{label}</p>}
              </Button>
   </>
  )
}

export default MyButton