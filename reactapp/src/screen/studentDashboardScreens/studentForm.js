import { getData, sendData } from "../../config/firebaseMethods";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Button, Grid, ThemeProvider } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MyInput from "../../components/myInput";
import MySelect from "../../components/mySelect";
import BasicDatePicker from "../../components/myDatePicker";
import Heading from "../../components/Heading";
import MyColorTheme from "../../components/myColorTheme";
const StudentForm = () => {
  const drawerWidth = 200;

  const [userId, setUserId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [fromDB, setFromDB] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [model, setModel] = useState([]);
  const [dob, setDob] = useState("");
  const [isFeeSubmitted, setIsFeeSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
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
    model["userId"]= params.id

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
        setIsSubmitted(true);
        // navigate("/formSubmitMessage");
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
  }, [model]);
  const extractDateMonthYear = () => {
    let birthYear = dob.$y;
    const current = new Date();
    let currYear = current.getFullYear();
    let age = currYear - birthYear;
    console.log(age);
    fillModel("age", age);
  };
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <Box
          sx={{
            flexGrow: 1,
            width: {
              md: `calc(100% - ${drawerWidth}px)`,
              // sm:`calc(100% - 0px)`,
              // xs:"100%"
            },
            marginTop: 7,
            marginLeft: { sm: 25, xs: 1 },

            padding: "1.5rem",
            height: "100%",
            minHeight: "100vh",
            display: "flex",
            justifyContent: "center",
            // backgroundColor:"#E2F0F9",
          }}
        >
          {!isSubmitted ? (
            <form onSubmit={sendToDB}>
              <Grid
                container
                sx={{
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                <Grid item md={12} xs={12}>
                  <Heading
                    title={"User Registration Form"}
                    fontFamily="comfortaa"
                    color="#DF4C73"
                    variant="h5"
                  />
                </Grid>

                <Grid
                  item
                  md={6}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    //   size={"small"}
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    color={"secondary"}
                    label={"Enter Email Address"}
                    variant={"outlined"}
                    name="email"
                    onChange={(e) => {
                      fillModel("email", e.target.value);
                    }}
                  />
                </Grid>

                <Grid
                  item
                  md={6}
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    // required
                    // required
                    type="number"
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    // required
                    type="number"
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    type="number"
                    // required
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    // required
                    type="number"
                    color={"secondary"}
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
                  sm={12}
                  sx={{ display: "flex", justifyContent: "center" }}
                >
                  <MyInput
                    focused
                    // required
                    type="number"
                    color={"secondary"}
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
                  sm={12}
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
                  sm={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                  }}
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
                  sm={12}
                  xs={12}
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    color: "secondary",
                  }}
                >
                  <BasicDatePicker
                    value={dob}
                    onChange={(e) => {
                      setDob(e);
                      console.log(e);
                      extractDateMonthYear();
                    }}
                  />
                </Grid>
                <Grid
                  item
                  md={12}
                  sm={12}
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
          ) : (
            <Heading
              title={"You have entered your personal information"}
              fontFamily="comfortaa"
              color="#DF4C73"
              variant="h5"
            />
          )}
        </Box>
      </ThemeProvider>
    </>
  );
};

export default StudentForm;
