import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import { ThemeProvider } from "@mui/material";
import Heading from "../components/Heading";
import { getCategory, loginUser } from "../config/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";
// import Heading2 from "../components/Heading2";
import MyInput from "../components/myInput";
import MyColorTheme from "../components/myColorTheme";
const Login = () => {
  const [model, setModel] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const navigate = useNavigate();
  const login = (e) => {
    e.preventDefault();
    setLoader(true);
    loginUser(model)
      .then((success) => {
        console.log(success.category);
        setLoader(false);
        switch (success.category) {
          case "Teacher": {
            console.log("Teacher");
            navigate(`/teacherDashboard/${success.id}`);

            // navigate(`/adminDashboard/${success.id}`);
            break;
          }

          case "Student": {
            console.log("Student");

            navigate(`/studentDashboard/${success.id}`);
            break;
          }
          case "Admin": {
            console.log("Admin");

            // navigate(`/adminDashboard/${success.id}`);
            break;
          }
          default: {
            console.log("none");

            // navigate(`/adminDashboard/${success.id}`);
            break;
          }
        }
        //  getCategory()
        //  .then((res)=>{console.log(res)})
        //  .catch((err)=>{console.log(err)})
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  const fillModel = (key, value) => {
    model[key] = value;
    console.log(model);
    setModel({ ...model });
  };
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <form onSubmit={login}>
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
              <Heading title="Login" variant="h4" color="#DF4C73" fontFamily="comfortaa"/>

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
                  fillModel("email", e.target.value);
                }}
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
                label={"Enter Password"}
                type="password"
                variant={"filled"}
                onChange={(e) => {
                  fillModel("password", e.target.value);
                }}
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Button
                sx={{
                  marginY: 1,
                  width: 225,
                  height: 50,
                  // paddingY:"0.1rem",
                }}
                // color="#DF4C73"
                size="small"
                variant="contained"
                type="submit"
              >
                {isLoading ? <CircularProgress /> : <p>Login</p>}
              </Button>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                margin: 1,
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Typography>
                Failed to login? <Link to="/">Signup Here</Link>
              </Typography>
            </Grid>
          </Grid>
        </form>
      </ThemeProvider>
    </>
  );
};

export default Login;
