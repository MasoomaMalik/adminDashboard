import { Button, Grid, MenuItem, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  db,
  auth,
  checkUser,
  sendData,
  getData,
} from "../config/firebaseMethods";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";
import { uid } from "uid";
import { useNavigate, useLocation, useParams, Link } from "react-router-dom";
import MyInput from "../components/myInput";
import MySelect from "../components/mySelect";
const Home = ({ children }) => {
  const params = useParams();
  const [userId, setUserId] = useState("");
  const [toDB, setToDB] = useState("");
  const [fromDB, setFromDB] = useState([]);
  const [isLoading, setLoader] = useState(false);
  const [model,setModel]=useState({})
  const courseArr=[
    {label:"Front End Dev", value : "frontEndDev"},
    {label:"Back End Dev", value : "backEndDev"},
  ]
  const sectionArr=[
    {label:"A", value : "A"},
    {label:"B", value : "B"},
  ]

  const handleSelectChange = (event) => {
    // setAge(event.target.value);
  };
const  fillModel=(key,value)=>{
// setModel(value)

model[key]=value;
// model.abc=e.target.value;
console.log(model)
// let temp={abc:e.target.value}
// console.log(temp)
setModel({...model})
 
}
  const navigate = useNavigate();

  const sendToDB = () => {
    const date = new Date();
    const time =
      date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    sendData(
      // {
      //   data: model,
      //   // time: time,
      //   // userId: userId,
      // }
      model,
      `toDBuserData`
    )
      .then((res) => {
        console.log(res);
        navigate("/result")
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
    console.log("model")
    console.log(model)
    checkUser()
      .then((res) => {
        if (params.id === res) {
          setUserId(res);
          getFromDB();
        } else {
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // extractDateMonthYear();
  }, [model]);
  const extractDateMonthYear = () => {
    // console.log(dateOfBirth);

    const current = new Date();
    let currYear = current.getFullYear();

    // console.log(tempYear);
  };

  const sendUserData = ({ obj }) => {
    const uidd = uid();

    set(ref(db, `formData/${uidd}`), { obj })
      .then((success) => {
        console.log(success);
        navigate("result", { state: uidd });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      {/* <Box>
        <TextField
          label="send Data"
          variant="standard"
          onChange={(e) => {
            setToDB(e.target.value);
          }}
        />

        <Button variant="contained" onClick={sendToDB}>
          send data
        </Button>
      </Box>
      {fromDB.map((e, i) => (
        <li key={e.dataId}>{e.data}</li>
      ))} */}
<Link to = "/courseForm">course form</Link>
      {/* form */}

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
            maxWidth: "90%",
            marginY: 1,
            // marginX: { md: 5, sx: 1 },
            paddingY: 1,
            // paddingX: { md: 5, sx: 1 },
            display: "flex",
            flexDirection: "column",
            // alignContent: "center",
          }}
        >
          {/* <Box
            sx={{
              fontSize: "0.5rem",
              display: "flex",
              flexDirection: "column",
              margin: 1,
              marginY: 3,
            }}
          > */}
            {/* <Box sx={{ margin: "0.5rem" }}> */}
              <MyInput
                focused
                color={"secondary"}
                label={"Enter First Name"}
                variant={"outlined"}

                name="firstName"
                onChange={(e)=>{fillModel('firstName',e.target.value)}}
              />
              <MyInput
                focused
                color={"secondary"}
                label={"Enter Last Name"}
                variant={"outlined"}
                name='lastName'
                onChange={(e)=>{fillModel('lastName',e.target.value)}}

              />
              <MyInput
                focused
                color={"secondary"}
                label={"Enter Father's Name"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('fatherName',e.target.value)}}
                
              />
              <MyInput
                focused
                required
                // required
                type="number"
                color={"secondary"}
                label={"Enter Contact"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('contact',e.target.value)}}

              />
              <MyInput
                focused
                type="number"
                required
                color={"secondary"}
                label={"Enter Father's Contact"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('fatherContact',e.target.value)}}

              />
              <MyInput
                focused
                required 
                type="number"

                color={"secondary"}
                label={"Enter CNIC"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('cnic',e.target.value)}}

              />
              <MyInput
              focused
              required 
              type="number"
              color={"secondary"}
              label={"Enter Father CNIC"}
              variant={"outlined"}
              onChange={(e)=>{fillModel('fatherCnic',e.target.value)}}

            />
            <MyInput
                focused
                required 
                type="number"
                color={"secondary"}
                label={"Enter Emergency Contact"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('emergencyContact',e.target.value)}}

              />
<Box sx={{margin:'0.5rem',padding:'0.5rem'  }}>

<input type="date" placeholder="Select Data"></input>
</Box>
<MySelect
arr={sectionArr}
label={"Section"}
onChange={(e)=>{fillModel('section',e.target.value)}}

/>

<MySelect
arr={courseArr}
label={"Course"}
onChange={(e)=>{fillModel('course',e.target.value)}}

/>

<Button onClick={sendToDB}>
submit form
</Button>
            {/* </Box> */}
          {/* </Box> */}
        </Grid>
      </Grid>

      
    </>
  );
};

export default Home;
