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
import { useNavigate, useLocation, useParams, Link, Navigate } from "react-router-dom";
import MyInput from "../components/myInput";
import MySelect from '../components/mySelect'

const CourseForm = () => {
    const courseArr=[
        {label:"8mos", value : "8"},
        {label:"16mos", value : "16"},
        {label:"24mos", value : "24"},
      ]
      const formOpen=[
        {label:"open", value : "open"},
        {label:"closed", value : "closed"},
      ]
      const noOfQuiz=[
        {label:'1',value:'1'},
        {label:'2',value:'2'},
        {label:'3',value:'3'},
        {label:'4',value:'4'},
        {label:'5',value:'5'},
        {label:'6',value:'6'},
      ]
      const [courseDetail, setCourseDetail]= useState({})
      const [assTrainer,setAssTrainer]=useState([])
      const navigate=useNavigate();
      const sendToDB = () => {
        const date = new Date();
        const time =
          date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();
    
        sendData(
         courseDetail,
          `toDBcourseInfo/`
        )
          .then((res) => {
            console.log(res)
        // navigate("/result")

            navigate("/courseFormResult")
          })
          .catch((err) => {
            console.log(err);
          });
      };
      const  fillModel=(key,value)=>{
        // setModel(value)
        
        courseDetail[key]=value;
        // model.abc=e.target.value;
        console.log(courseDetail)
        // let temp={abc:e.target.value}
        // console.log(temp)
        setCourseDetail({...courseDetail})
         
        }
        const addAssTrainer = (e,key)=>{
            setAssTrainer(...assTrainer,e.target.value)
            fillModel(key,assTrainer)
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
              <MyInput
                focused
                color={"secondary"}
                label={"Enter Course Name"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('courseName',e.target.value)}}

                // name="firstName"
                // onChange={fillModel}
              />
             <MySelect
arr={courseArr}
label={"Course Duration"}
onChange={(e)=>{fillModel('courseDuration',e.target.value)}}

/>
 
<MySelect
arr={formOpen}
label={"Form Open?"}
onChange={(e)=>{fillModel('formOpen',e.target.value)}}

/>

<MySelect
arr={noOfQuiz}
label={"num of quiz"}
onChange={(e)=>{fillModel('noOfQuiz',e.target.value)}}

/>
              <MyInput
                focused
                type="number"
                color={"secondary"}
                label={"Enter Fee in Rupees"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('fees',e.target.value)}}

              />
              <MyInput
                focused
                color={"secondary"}
                label={"Enter Lead Trainer ID"}
                variant={"outlined"}
                onChange={(e)=>{fillModel('leadTrainerID',e.target.value)}}

              />
              <Box>

              <MyInput
                focused
                color={"secondary"}
                label={"Enter Assistant Trainers"}
                variant={"outlined"}
                onChange={
                  (e) =>{ addAssTrainer('assTrainer',e.target.value)}
                }
                />
                </Box>
    
<Button variant="contained" onClick={sendToDB}>
    Submit
</Button>
        </Grid>
      </Grid>

    
    </>

  )
}

export default CourseForm