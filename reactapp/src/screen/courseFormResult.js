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
import { Typography } from "@mui/material";
const CourseFormResult = () => {
  const [dbObj, setDbObj] = useState({});
  const location = useLocation();

  const getFromDB = () => {
    // const uidd = location.state;
    onValue(ref(db, `toDBcourseInfo/`), (snapshot) => {
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
        
<h1>
    {`Course Name: ${dbObj.courseName? dbObj.courseName: "not enterd" }`}</h1>

<h1>{`Course Duration: ${dbObj.courseDuration? dbObj.courseDuration: "not enterd" }`}</h1>
<h1>{`isFormOpen? : ${dbObj.formOpen? dbObj.formOpen: "not enterd" }`}</h1>
<h1>{`Num of quizzez : ${dbObj.course? dbObj.course: "not enterd" }`}</h1>
<h1>{`fees : ${dbObj.fees? dbObj.fees: "not enterd" }`}</h1>
<h1>{`leadTrainer : ${dbObj.leadTrainerID? dbObj.leadTrainerID: "not enterd" }`}</h1>
        
        

      {/* ))} */}
     
    </>
  );
};

export default CourseFormResult;
