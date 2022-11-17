import React, { useState } from "react";
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Heading from "../components/Heading";
import { signUpUser } from "../config/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";
import MyInput from "../components/myInput";
import MySelect from "../components/mySelect";
import MyButton from "../components/myButton";

const Signup = () => {
  const [model, setModel] = useState([]);
  const [isLoading, setLoader] = useState(false);

  // const arr = [
  //   {
  //     value: "Teacher",
  //     label: "Teacher",
  //   },
  //   {
  //     value: "Student",
  //     label: "Student",
  //   },
  // ];
  const navigate = useNavigate();
 
 //sign up func
  const signUp = (e) => {
    e.preventDefault();

    setLoader(true);
    model.category = "user";
    signUpUser(model)
      .then((success) => {
        console.log(success);
        navigate("login");
        setLoader(false);
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

      <form onSubmit={signUp}>
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
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <Heading
              title="Welcome to X-ABC"
              variant="h4"
              color="#292826"
              fontFamily="comfortaa"
            />
          </Grid>
          <Grid item md={12} xs={12} sx={{ marginLeft: 3 }}>
            <Heading
              title="Signup Here"
              variant="h5"
              color="#292826"
              fontFamily="comfortaa"
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{
              // width: {md:"30%", xs:"100%"},
              // border:1,
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MyInput
              focused
              size={"large"}
              color={"secondary"}
              label={"Enter First Name"}
              variant={"filled"}
              onChange={(e) => {
                fillModel("firstName", e.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MyInput
              focused
              size={"large"}
              color={"secondary"}
              label={"Enter Last Name"}
              variant={"filled"}
              onChange={(e) => {
                fillModel("lastName", e.target.value);
              }}
            />
          </Grid>
          <Grid
            item
            md={6}
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
            md={6}
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
            md={6}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MyInput
              focused
              size={"large"}
              color={"secondary"}
              label={"Enter Contact"}
              type="number"
              variant={"filled"}
              onChange={(e) => {
                fillModel("contact", e.target.value);
              }}
            />
          </Grid>

          {/* WHO ARE YOU */}
          {/* <Grid
              item
              md={6}
              xs={12}
            >
              <MySelect
                arr={arr}
                label={"Who are you?"}
                onChange={(e) => {
                  fillModel("category", e.target.value);
                }}
              />
            </Grid> */}
          {/* sign up input of email .... */}

          <Grid
            item
            md={12}
            xs={12}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <MyButton
              variant="contained"
              type="submit"
              disabled={isLoading}
              isLoading={isLoading}
              label="Signup"
            ></MyButton>
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
              Already have account? Instead <Link to="login">Login Here</Link>
            </Typography>
          </Grid>
        </Grid>
      </form>
      {/* </ThemeProvider> */}
    </>
  );
};

export default Signup;
