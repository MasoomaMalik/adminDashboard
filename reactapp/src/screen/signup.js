import React, { useState } from "react";
import { Button, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MenuItem from "@mui/material/MenuItem";
import Heading from "../components/Heading";
import { signUpUser } from "../config/firebaseMethods";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [course, setCourse] = useState("")
  const [section, setSection] = useState("")
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("male");
  const [isLoading, setLoader] = useState(false);

  const genders = [
    {
      value: "female",
      label: "Female",
    },
    {
      value: "male",
      label: "Male",
    },
  ];
  const navigate= useNavigate()
  const signUp = (e) => {
    e.preventDefault();
    setLoader(true);

    signUpUser({
      email,
      password,
      // userName,
      contact,
      gender,
    })
      .then((success) => {
        console.log(success);
        navigate('login')
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  return (
    <>
      {/* container grid */}

      <form onSubmit={signUp}>
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

            <Heading title="Signup Here" />

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
              <Box sx={{ margin: "0.5rem" }}>
                <TextField
                  focused
                  color="secondary"
                  label="Enter First Name"
                  variant="outlined"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                />
              </Box>
              <Box sx={{ margin: "0.5rem" }}>
                <TextField
                  focused
                  color="secondary"
                  label="Enter Last Name"
                  variant="outlined"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                />
              </Box>
              <Box sx={{ margin: "0.5rem" }}>
                <TextField
                  focused
                  color="secondary"
                  label="Enter Contact"
                  variant="outlined"
                  type="number"
                  onChange={(e) => {
                    setContact(e.target.value);
                  }}
                />
              </Box>
              <Box
                // component="form"
                sx={{
                  "& .MuiTextField-root": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  select
                  label="Select Gender"
                  value={gender}
                  onChange={(e) => {
                    setGender(e.target.value);
                  }}
                  focused
                  color="secondary"
                >
                  {genders.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </TextField>
              </Box>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Button
                  sx={{ marginY: 1 }}
                  color="secondary"
                  variant="contained"
                  type="submit"
                >
                   {isLoading ? <CircularProgress /> : <p>SignUp</p>}
                 
                </Button>
              </Box>
              <Box>
                <Typography>Already have account? Instead <Link to ="login">Login Here</Link></Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default Signup;
