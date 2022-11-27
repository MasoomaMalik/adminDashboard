import { Button, Grid, ThemeProvider } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { db, sendData, getData } from "../config/firebaseMethods";
import { ref, set } from "firebase/database";
import { uid } from "uid";
import { useNavigate, useParams } from "react-router-dom";
import MyInput from "../components/myInput";
import MySelect from "../components/mySelect";
import BasicDatePicker from "../components/myDatePicker";
import Heading from "../components/Heading";
import MyColorTheme from "../components/myColorTheme";

const Home = () => {
  const [userId, setUserId] = useState("");
  const [toDB, setToDB] = useState("");
  const [fromDB, setFromDB] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [model, setModel] = useState([]);
  const [dob, setDob] = useState("");
  const [isFeeSubmitted, setIsFeeSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const courseArr = [
    { label: "Front End Dev", value: "frontEndDev" },
    { label: "Back End Dev", value: "backEndDev" },
  ];
  const sectionArr = [
    { label: "A", value: "A" },
    { label: "B", value: "B" },
  ];

  const handleSelectChange = (event) => {
    // setAge(event.target.value);
  };
  const fillModel = (key, value) => {
    model[key] = value;
    console.log(model);
    setModel({ ...model });
  };

  const sendToDB = (event) => {
    event.preventDefault();
    const date = new Date();
    // const time =
    //   date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    const registrationDate = date.getDate();
    const registrationYear = date.getFullYear();
    model["registrationDate"] = registrationDate;
    model["registrationYear"] = registrationYear;
    model["isFeeSubmitted"] = isFeeSubmitted;
    model["isApproved"] = isApproved;
    model["isActive"] = isActive;

    console.log("model");

    sendData(
      // {
      //   data: model,
      //   // time: time,
      //   // userId: userId,
      // }
      model,
      `userRegistrationForm`
    )
      .then((res) => {
        console.log(res);
        navigate("/formSubmitMessage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getFromDB = () => {
    getData(`toDBuserData`)
      .then((res) => {
        console.log(res);

        setFromDB(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    console.log("model");
    console.log(model);
    // checkUser()
    //   .then((res) => {
    //     if (params.id === res) {
    //       setUserId(res);
    //       getFromDB();
    //     } else {
    //       navigate("/login");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    // extractDateMonthYear();
  }, [model]);
  const extractDateMonthYear = () => {
    let birthYear = dob.$y;
    const current = new Date();
    let currYear = current.getFullYear();
    let age = currYear - birthYear;
    fillModel("age", age);
  };
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <Box
          sx={{
            padding: "1rem",
            width: "100vw",
            height: "100vh",
            // backgroundColor: "#A04EF6",
            backgroundColor: "#E7D045",

            display: "flex",
            justifyContent: "center",
          
          }}
        >
          <form onSubmit={sendToDB}>
            <Grid
              container
              sx={{
               
                width: { md: "60vw", xs: "80vw" },
                height: "auto",
              }}
            >
              <Grid item md={12} xs={12}>
                <Heading title={"User Registration Form"} color={"primary"} />
              </Grid>

              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MyInput
                  focused
                  color={"primary"}
                  label={"Enter First Name"}
                  variant={"outlined"}
                  name="firstName"
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
                  color={"primary"}
                  label={"Enter Last Name"}
                  variant={"outlined"}
                  name="lastName"
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
                  // required
                  // required
                  type="number"
                  color={"primary"}
                  label={"Enter Contact"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("contact", e.target.value);
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
                  // required
                  type="number"
                  color={"primary"}
                  label={"Enter CNIC"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("cnic", e.target.value);
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
                  color={"primary"}
                  label={"Enter Father's Name"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("fatherName", e.target.value);
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
                  type="number"
                  // required
                  color={"primary"}
                  label={"Enter Father's Contact"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("fatherContact", e.target.value);
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
                  // required
                  type="number"
                  color={"primary"}
                  label={"Enter Father CNIC"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("fatherCnic", e.target.value);
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
                  // required
                  type="number"
                  color={"primary"}
                  label={"Enter Emergency Contact"}
                  variant={"outlined"}
                  onChange={(e) => {
                    fillModel("emergencyContact", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MySelect
                  arr={sectionArr}
                  label={"Section"}
                  onChange={(e) => {
                    fillModel("section", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MySelect
                  arr={courseArr}
                  label={"Course"}
                  onChange={(e) => {
                    fillModel("course", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  color: "primary",
                }}
              >
                {/* <Box sx={{ margin: "0.5rem", padding: "0.5rem" }}> */}

                <BasicDatePicker
                  // color={"primary"}
                  // sx={{color:"primary"}}
                  value={dob}
                  onChange={(e) => {
                    setDob(e);
                    console.log(e);
                    extractDateMonthYear();
                  }}
                />
                {/* </Box> */}
              </Grid>
              <Grid
                item
                md={12}
                xs={12}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  margin: "1rem",
                  padding: "0.25rem",
                }}
              >
                <Button variant="contained" type="submit">
                  Submit Form
                </Button>
              </Grid>
            </Grid>
          </form>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default Home;
