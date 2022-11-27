import React, { useState } from "react";
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Heading from "../components/Heading";
import { loginUser } from "../config/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoader] = useState(false);
  const navigate= useNavigate();
  const login =()=>{
    setLoader(true)
    loginUser({email, password})
    .then((success)=>{console.log(success)
      setLoader(false);
    navigate(`/adminDashboard/${success.id}`)
    }
      )
    .catch((err)=>{console.log(err)
      setLoader(false);})

  }
  return (
    <>
      <Grid
        container
        sx={{
          backgroundColor: "#A04EF6",

          width: "100vw",
          height: "100vh",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {/* item grid */}
        <Grid
          item
          sx={{
            borderRadius: 5,
            backgroundColor: "#E7D045",
            maxWidth: "60%",
            marginY: 1,
            marginX: { md: 5, sx: 1 },
            paddingY: 1,
            paddingX: { md: 5, sx: 1 },
            display: "flex",
            flexDirection: "column",
            alignContent: "center",
          }}
        >
          {/* sign up heading */}

          <Heading title="Login Here" />

          {/* sign up input of email .... */}

          <Box
            sx={{
              fontSize: "0.5rem",
              display: "flex",
              flexDirection: "column",
              margin: 1,
              marginY: 3,
            }}
          >
            <Box sx={{ margin: "0.5rem" }}>
              <TextField
                focused
                color="secondary"
                label="Enter Email Address"
                variant="outlined"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ margin: "0.5rem" }}>
              <TextField
                focused
                color="secondary"
                label="Enter Password"
                type="password"
                variant="outlined"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Button sx={{ marginY: 1 }} color="secondary" variant="contained" onClick={login}>
              {isLoading ? <CircularProgress /> : <p>Login</p>}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Login;
