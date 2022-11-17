import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { ThemeProvider } from "@mui/material";
import Heading from "../components/Heading";
import {
  getCategory,
  loginUser,
  resetPassword,
} from "../config/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";
import MyInput from "../components/myInput";
import MyColorTheme from "../components/myColorTheme";
import MyButton from "../components/myButton";

const PasswordReset = () => {
  const [model, setModel] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [email, setEmail] = useState("");
  const [msg, setMsg] = useState(false);
  const navigate = useNavigate();

  //login func

  //password reset
  const resetUserPassword = (e) => {
    console.log(email);
    setLoader(true);
    e.preventDefault();

    resetPassword(email)
      .then((res) => {
        setLoader(false);
        setMsg(true);
        console.log(res);
      })
      .catch((err) => {
        setLoader(false);

        console.log(err);
      });
  };

  return (
    <>
      <form onSubmit={resetUserPassword}>
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
            <Heading
              title="Password-Reset"
              variant="h4"
              color="#292826"
              fontFamily="comfortaa"
            />
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MyInput
              focused
              size={"large"}
              color={"secondary"}
              label={"Enter Email Address"}
              variant={"filled"}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </Grid>

          <Grid
            item
            md={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MyButton
              width={225}
              height={50}
              variant="contained"
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              label="Submit"
            />
            ;
          </Grid>
          <Grid
            item
            md={12}
            xs={12}
            sx={{
              margin: 1,
              display: "flex",
              // flexDirection:"column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {/* {console.log()} */}
            {msg ? (
              <>
                <Box sx={{ margin: 1 }}>
                  <Typography>
                    {`We've sent a password-reset link to ${email}. `}
                  </Typography>
                </Box>
                <MyButton
                  width={225}
                  height={50}
                  variant={"contained"}
                  label="Login Here"
                  onClick={(e) => {
                    setMsg(false);
                    navigate("/login");
                  }}
                />
              </>
            ) : null}
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default PasswordReset;
