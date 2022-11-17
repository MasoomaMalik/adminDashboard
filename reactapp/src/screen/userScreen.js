import React, { useEffect, useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
  ThemeProvider,
  TextField,
} from "@mui/material";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import ScreenHeader from "../components/screenHeader";
import { checkUser, logout } from "../config/firebaseMethods";
import FullScreenLoader from "../components/fullScreenLoader";


const UserScreen = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [isUser,setIsUser]=useState(false)
    const [fullScreenLoader,setFullScreenLoader]=useState(false)
    const [isLoading,setLoader]=useState(false)

    useEffect(() => {
        setFullScreenLoader(true)
    checkUser()

    .then((res) => {
        console.log(res);
        if (params.id === res) {
            console.log("same");
setFullScreenLoader(false)
            
            setIsUser(true);
          }
          else {
            setFullScreenLoader(false)

            navigate("/login")
          }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const userLogOut = ()=>{
    console.log("dfsfs")
    setLoader(true)
    logout()
    .then((res)=>{console.log(res)
    navigate("/login")
    setLoader(false)

    })
    .catch((err)=>{console.log(err)
        setLoader(false)
    
    });
  }
  return (
    <>
    {
        fullScreenLoader?
        <div>

        <FullScreenLoader />
        {/* <Typography>load</Typography> */}
        </div> 
         :
<Grid
        container
        sx={{
          backgroundColor: "#E2F0F9",
          width: "100vw",
          height: "100%",
          minHeight: "100vh",
          display: "flex",
          paddingX: 5,
          paddingY: 2,
          justifyContent: "center",
        }}
      >
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <ScreenHeader 
          onClick={userLogOut} 
          titleVariant="h4" titleLabel="Heading Here" 
          btnLabel="Logout" btnVariant="contained"
          isLoading={isLoading} disabled={isLoading} />
        </Grid>
        ;
        <Grid
          item
          md={12}
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >

        </Grid>
        ;
      </Grid>
    }
      
      ;
    </>
  );
};

export default UserScreen;
