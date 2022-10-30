import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";

import { uid } from "uid";
import { useLocation } from "react-router-dom";
import {
    db,
    auth,
    checkUser,
    sendData,
    getData,
  } from "../config/firebaseMethods";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
const Result = () => {
  const [dbObj, setDbObj] = useState({});
  const location = useLocation();

  const getFromDB = () => {
    // const uidd = location.state;
    onValue(ref(db, `toDBuserData`), (snapshot) => {
      const data = snapshot.val();
      console.log("data");
      console.log(data);
      if (data !== null) {
        // console.log(Object.values(Object.values(data)));
setDbObj(data)
      
      }
    });
  };

// const getFromDB = () => {
//     getData(`toDBuserData`)
//       .then((res) => {
//         console.log(res);

//         setDbObj(res);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
  useEffect(() => {
    getFromDB();
    // const location = useLocation();
  }, []);
  return (
    <>
      {console.log(dbObj)}
      {/* {dbObj.map((e,i)=>( */}
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
   
  <Box sx={{margin:'1rem',padding:'0.5rem'}}>
        
<h1>
    {`First Name: ${dbObj.firstName? dbObj.firstName: "not enterd" }`}</h1>

<h1>{`Last Name: ${dbObj.lastName? dbObj.lastName: "not enterd" }`}</h1>
<h1>{`contact : ${dbObj.contact? dbObj.contact: "not enterd" }`}</h1>
<h1>{`course : ${dbObj.course? dbObj.course: "not enterd" }`}</h1>
<h1>{`section : ${dbObj.section? dbObj.section: "not enterd" }`}</h1>
<h1>{`fatherName : ${dbObj.fatherName? dbObj.fatherName: "not enterd" }`}</h1>
<h1>{`cnic : ${dbObj.cnic? dbObj.cnic: "not enterd" }`}</h1>
<h1>{`fatherCnic : ${dbObj.fatherCnic? dbObj.fatherCnic: "not enterd" }`}</h1>
<h1>{`fatherContact : ${dbObj.fatherContact? dbObj.fatherContact: "not enterd" }`}</h1>
<h1>{`emergencyContact : ${dbObj.emergencyContact? dbObj.emergencyContact: "not enterd" }`}</h1>
     </Box> 
      </Grid>  
      </Grid>  
        </>
  
  );
};

export default Result;
