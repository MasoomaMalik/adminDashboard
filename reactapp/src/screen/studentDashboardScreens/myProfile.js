import { getData,getDataByUser, sendData } from "../../config/firebaseMethods";
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
import userDp from "../../assets/userDp.png";
const MyProfile = () => {
  const drawerWidth = 200;

  const [userId, setUserId] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dbObj, setDbObj] = useState({});
  const [isLoading, setLoader] = useState(false);
  const [model, setModel] = useState([]);
  const [dob, setDob] = useState("");
  const [isFeeSubmitted, setIsFeeSubmitted] = useState(false);
  const [isApproved, setIsApproved] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const navigate = useNavigate();
  const params = useParams();
  console.log(params);
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

  

  const getFromDB = () => {
    getData(`userRegistrationForm`)
      .then((res) => {
        console.log(res);
let tempArr= res.filter((e,i)=>e.userId==params.id)[0]
console.log(tempArr)
// Object.keys(tempArr).forEach(function(key, index) {
//   tempArr[key] ="maha";
// });
console.log(tempArr)
        setDbObj(tempArr);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {getFromDB();
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
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <img
                src={userDp}
                style={{ width: "150px", height: "150px" }}
              ></img>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              {console.log(dbObj)}
              <Heading
                title={`Name: ${dbObj.firstName} ${dbObj.lastName}`}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <Heading
                title={`Father's Name:  ${dbObj.fatherName}`}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <Heading
                title={`Email: ${dbObj.email} `}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <Heading
                title={`Contact: ${dbObj.contact}`}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
            
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start" }}
            >
              <Heading
                title={`CNIC: ${dbObj.cnic}`}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
            
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "start",  }}
            >
              <Heading
              
                title={`Enrolled Course: `}
                fontFamily="comfortaa"
                color="#DF4C73"
                variant="subtitle1"
              />
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default MyProfile;
