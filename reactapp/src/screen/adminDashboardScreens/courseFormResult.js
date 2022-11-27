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
  getDataOnChild,
} from "../../config/firebaseMethods";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import MyResponsiveDrawer from "../../components/drawer";
import { useGlobalState, setGlobalState } from "../../config/dataHandle";
import { tableCellClasses, ThemeProvider } from "@mui/material";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import styled from "@emotion/styled";
import Heading from "../../components/Heading"

const CourseFormResult = () => {
  const [dbObj, setDbObj] = useState([]);
  const location = useLocation();
  // console.log(useGlobalState("isDataAdded"));
  const getFromDB = () => {
    //      getDataOnChild(`toDBcourseInfo/`)
    //     .then((res)=>{console.log(res)

    // let tempObj=res;
    //       setDbObj(dbObj=>[...dbObj,tempObj])

    //     })
    //     .catch((err)=>{console.log(err)})

    getData(`toDBcourseInfo/`)
      .then((res) => {
        console.log(res);
        let tempObj = res;
        setDbObj(res);

        // setDbObj(dbObj=>[...dbObj,tempObj])
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFromDB();
    // const location = useLocation();
  }, []);
  const drawerWidth = 200;
  // const TableCell = styled(TableCell)(({ theme }) => ({
  //   [`&.${tableCellClasses.head}`]: {
  //     backgroundColor: theme.palette.common.black,
  //     color: theme.palette.common.white,
  //   },
  //   [`&.${tableCellClasses.body}`]: {
  //     fontSize: 14,
  //   },
  // }));
  // const TableRow = styled(TableRow)(({ theme }) => ({
  //   "&:nth-of-type(odd)": {
  //     backgroundColor: theme.palette.action.black,
  //   },
  // }));
  return (
    <>
      {console.log(dbObj)}
      {/* {dbObj.map((e,i)=>( */}
      <Box
        sx={{
          backgroundColor: "#A04EF6",

          display: "flex",
          justifyContent: "start",
        }}
      >
        <MyResponsiveDrawer />

        <Box
          sx={{
            padding: "1rem",
            // width: "97vw",
            width: `calc(100% - ${drawerWidth}px)`,
            marginTop: "5rem",
            height: "100vh",
            display: "flex",
            // justifyContent: "center",
            // alignItems: "center",
            flexDirection: "column",
          }}
        >
          <Heading title="Courses List"/>
          <TableContainer
sx={{
  maxHeight: "500px",
  // width:"60%",ml:240,
  // backgroundColor: "#A04EF6",
}}
component={Paper}
>
<Table stickyHeader aria-label="simple table">
  <TableHead>
    <TableRow>
      <TableCell>Sno</TableCell>
      <TableCell>Course Name</TableCell>
      <TableCell>Duration</TableCell>
      <TableCell>Lead Trainer</TableCell>
      <TableCell>Fees</TableCell>
     </TableRow>
  </TableHead>
  <TableBody>
    {dbObj.map((row, i) => (
      <TableRow
        // key={row.dataId}
        key={i}
        // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
      >
        <TableCell>{i + 1}</TableCell>
        <TableCell>{row.courseName}</TableCell>
        <TableCell>{row.courseDuration}</TableCell>
        <TableCell>{row.leadTrainerID}</TableCell>
        <TableCell>{row.fees}</TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
</TableContainer>
        </Box>
      </Box>

      {/* ))} */}
    </>
  );
};

export default CourseFormResult;
