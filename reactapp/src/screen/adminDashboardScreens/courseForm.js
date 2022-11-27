import {
  Button,
  Grid,
  MenuItem,
  TextField,
  Typography,
  ThemeProvider,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  db,
  auth,
  checkUser,
  sendData,
  getData,
} from "../../config/firebaseMethods";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";
import { uid } from "uid";
import {
  useNavigate,
  useLocation,
  useParams,
  Link,
  Navigate,
} from "react-router-dom";
// import {ThemeProvider} from
import MyInput from "../../components/myInput";
import MySelect from "../../components/mySelect";
import MyResponsiveDrawer from "../../components/drawer";
import Heading from "../../components/Heading";
import MyColorTheme from "../../components/myColorTheme";
import {useGlobalState,setGlobalState} from '../../config/dataHandle'
const CourseForm = () => {
  const courseArr = [
    { label: "8mos", value: "8" },
    { label: "16mos", value: "16" },
    { label: "24mos", value: "24" },
  ];
  const formOpen = [
    { label: "open", value: "open" },
    { label: "closed", value: "closed" },
  ];
  const noOfQuiz = [
    { label: "1", value: "1" },
    { label: "2", value: "2" },
    { label: "3", value: "3" },
    { label: "4", value: "4" },
    { label: "5", value: "5" },
    { label: "6", value: "6" },
  ];
  const [model, setModel] = useState([]);
  const [assTrainer, setAssTrainer] = useState("");
  const [assTrainerArr, setAssTrainerArr] = useState([]);
  const navigate = useNavigate();
  const sendToDB = () => {
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    sendData(model, `toDBcourseInfo/`)
      .then((res) => {
        console.log(res);
        setGlobalState("isDataAdded",true)

        // navigate("/result")

        // navigate("/courseFormResult");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const fillModel = (key, value) => {
    model[key] = value;
    console.log(model);
    setModel({ ...model });
  };
  const addAssTrainer = ( ) => {
    console.log(assTrainer)
    console.log(assTrainerArr)
    setAssTrainerArr([...assTrainerArr, assTrainer]);
    fillModel("assTrainerArr", assTrainerArr);
  };
  const drawerWidth = 200;
  return (
    <>
      <ThemeProvider theme={MyColorTheme}>
        <Box
          sx={{
            backgroundColor: "#E7D045",
            height: "100vh",
            display: "flex",
            justifyContent: "start",
          }}
        >
          <MyResponsiveDrawer />
          <Box
            sx={{
              marginTop: "3rem",
              // border: 1,
            // backgroundColor: "#E7D045",

              padding: "1rem",
              width: `calc(100% - ${drawerWidth}px)`,
              // width: "100vw",
              // height: "auto",
              display: "flex",
              justifyContent: "center",   
            }}
          >
            <Grid
              container
              sx={
                {
                  width:{md:"80%",sm:"98%"},
                  height: {md:"70%",sm:"auto"},
                  display: "flex",
              justifyContent: "center",
                  // backgroundColor: "#E7D045",
                }
              }
            >
              <Grid item md={12} xs={12}>
                <Heading title={"Courses"} />
              </Grid>
              {/* item grid */}
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MyInput
                  focused
                  color={"primary"}
                  label={"Enter Course Name"}
                  variant={"filled"}
                  onChange={(e) => {
                    fillModel("courseName", e.target.value);
                  }}

                  // name="firstName"
                  // onChange={fillModel}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MyInput
                  focused
                  type="number"
                  color={"primary"}
                  label={"Enter Fee in Rupees"}
                  variant={"filled"}
                  onChange={(e) => {
                    fillModel("fees", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MyInput
                  focused
                  color={"primary"}
                  label={"Enter Lead Trainer ID"}
                  variant={"filled"}
                  onChange={(e) => {
                    fillModel("leadTrainerID", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <Box sx={{display:"flex",border:1,}}>
                  <MyInput
                    focused
                    color={"primary"}
                    label={"Enter Assistant Trainers"}
                    variant={"filled"}
                    onChange={(e) => {
                      setAssTrainer(e.target.value)
                    }}

                  />
                  <Button sx={{padding:0,}}variant="standard" onClick={addAssTrainer}>Add</Button>
                </Box>
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MySelect
                  arr={courseArr}
                  label={"Course Duration"}
                  onChange={(e) => {
                    fillModel("courseDuration", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MySelect
                  arr={formOpen}
                  label={"Form Open?"}
                  onChange={(e) => {
                    fillModel("formOpen", e.target.value);
                  }}
                />
              </Grid>
              <Grid
                item
                md={4}
                xs={12}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <MySelect
                  arr={noOfQuiz}
                  label={"num of quiz"}
                  onChange={(e) => {
                    fillModel("noOfQuiz", e.target.value);
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
                  variant="contained"
                  color="primary"
                  size="small"
                  // color="primary"
                  sx={{ padding:1 }}
                  onClick={sendToDB}
                >
                  Submit
                </Button>
                {/* </Grid> */}
              </Grid>
            </Grid>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default CourseForm;
