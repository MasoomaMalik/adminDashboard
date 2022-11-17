// all imports
//MUI
import {
    Button,
    CircularProgress,
    Grid,
    IconButton,
    Typography,
    ThemeProvider,
    TextField,
    Toolbar,
  } from "@mui/material";
  import {Box} from "@mui/system"

//react 
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
const params = useParams();
const navigate = useNavigate();
const [isUser,setIsUser]=useState(false)
const [fullScreenLoader,setFullScreenLoader]=useState(false)
const [isLoading,setLoader]=useState(false)
const [dbObj, setDbObj] = useState({});
const [model, setModel] = useState({});
//  call button component
<MyButton
// width={225}

// height={50}
  variant="contained"
  type="submit"
  disabled={isLoading}
  isLoading={isLoading}
  label="Signup"
  onClick={onCLick}

/>;

//heading component
<Heading title="Login" variant="h4" color="#DF4C73" fontFamily="comfortaa" />;

//input component
<MyInput
  focused
  required
  fullWidth
  type=""
  key={key}
  size={"large"}
  color={"secondary"}
  label={"Enter Email Address"}
  variant={"filled"}
  onChange={(e) => {
    fillModel("email", e.target.value);
  }}
/>;

<MySwitch defaultChecked={true}
disabled={false}
label={"switch"}
onChange={(e)=>{console.log(e.target.checked)
//setstate(e.target.checked)
}}
/>;

<MyRadio
arr={[{value:"male", label:"Male"},{value:"female",label:"Female"}]}
defaultValue={"female"}
onClick={(e)=>{console.log(e.target.value)}}
formLabel={"Gender Category"}
// row={"row"}

/>;
  <MyCheckbox
  defaultChecked={true}
  checkboxLabel={"pls check"}
  disabled={false}
  onChange={(e) => {
    console.log(e.target.checked);
  }}
/>;

<BasicDatePicker
                    value={dob}
                    onChange={(e) => {
                      // setDob(e);
                      console.log(e);
                      extractDateMonthYear(e);
                    }}
                  />;
                  const extractDateMonthYear = (e) => {
                    console.log(e);
                    let birthYear = e.$y;
                
                    const current = new Date();
                    let currYear = current.getFullYear();
                    let age = currYear - birthYear;
                    console.log(birthYear);
                    // fillModel("age", age);
                  };
                
//container grid
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
{/* 
//item grid */}
<Grid
  item
  md={12}
  xs={12}
  sx={{
    display: "flex",
    justifyContent: "center",
  }}
></Grid>
</Grid>
//func
//check user and logout

useEffect(() => {
    setFullScreenLoader(true)
checkUser()

.then((res) => {
    console.log(res);
    if (params.id === res) {
        console.log("same");
setFullScreenLoader(false)
        
        setIsUser(true);
      }
      else {
        setFullScreenLoader(false)

        navigate("/login")
      }
  })
  .catch((err) => {
    console.log(err);
  });
}, []);

const userLogOut = ()=>{
console.log("dfsfs")
setLoader(true)
logout()
.then((res)=>{console.log(res)
navigate("/login")
setLoader(false)

})
.catch((err)=>{console.log(err)
    setLoader(false)

});
}

useEffect(()=>{},[])

.then((res)=>{console.log(res)
})
.catch((err)=>{console.log(err)})

 
const fillModel = (key, value) => {
  model[key] = value;
  console.log(model);
  setModel({ ...model });
};