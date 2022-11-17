import React from 'react'
import {
    Button,
    CircularProgress,
    Grid,
    Typography,
    ThemeProvider,
    TextField,
    Toolbar,
  } from "@mui/material";
  import {Box} from "@mui/system"
  import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import MyButton from './myButton';
import Heading from './Heading';

const ScreenHeader = ({titleVariant,titleLabel,btnVariant,btnLabel,onClick,isLoading,disabled}) => {
    const params = useParams();
    const navigate = useNavigate();
  return (
   <>
   <Box sx={{display:"flex", justifyContent:"space-between", width:"100vw"}}>
   
    <Heading title={titleLabel} variant={titleVariant} color="#292826" fontFamily="comfortaa" />
    <MyButton
 height={50}
  variant={btnVariant}
  label={btnLabel}
  onClick={onClick}
  disabled={isLoading}
  isLoading={isLoading}
/>
   </Box>
   </>
  )
}

export default ScreenHeader