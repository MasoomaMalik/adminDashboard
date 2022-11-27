import React, { useEffect, useState } from "react";
import { getDatabase, ref, set, push, onValue, get } from "firebase/database";
import { DataGrid } from "@mui/x-data-grid";
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
import {
  Grid,
  tableCellClasses,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";
import MyColorTheme from "../../components/myColorTheme";
import Heading from "../../components/Heading";
import styled from "@emotion/styled";
import MyResponsiveDrawer from "../../components/drawer";
const UsersRecord = () => {
  const [dbObj, setDbObj] = useState([]);

  const getFromDB = () => {
    // const uidd = location.state;
    //     onValue(ref(db, `toDBuserData`), (snapshot) => {
    //       const data = snapshot.val();
    //       console.log("data");
    //       console.log(data);
    //       if (data !== null) {
    //         // console.log(Object.values(Object.values(data)));
    // setDbObj(data)

    //       }
    //     });

    getData(`userRegistrationForm`)
      .then((res) => {
        console.log(res);

        setDbObj(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const getOnChildFromDB = () => {
    getDataOnChild(`userRegistrationForm`)
      .then((res) => {
        console.log(res);

        setDbObj(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFromDB();
  }, []);

  useEffect(() => {
    // getOnChildFromDB()
  }, [dbObj]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.black,
    },
  }));
  const drawerWidth = 200;

  return (
    <>
      {console.log(dbObj)}
      <ThemeProvider theme={MyColorTheme}>
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
            <Heading title={"Registered Users List"} />

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
                    <StyledTableCell>Sno</StyledTableCell>
                    <StyledTableCell>First Name</StyledTableCell>
                    <StyledTableCell>Last Name</StyledTableCell>
                    <StyledTableCell>Course</StyledTableCell>
                    <StyledTableCell>Section </StyledTableCell>
                    <StyledTableCell>Age </StyledTableCell>
                    <StyledTableCell>Contact</StyledTableCell>
                    <StyledTableCell>CNIC</StyledTableCell>
                    <StyledTableCell>Father Name</StyledTableCell>
                    <StyledTableCell>Father Contact</StyledTableCell>
                    <StyledTableCell>Father CNIC</StyledTableCell>
                    <StyledTableCell>Emergency Contact</StyledTableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {dbObj.map((row, i) => (
                    <StyledTableRow
                      // key={row.dataId}
                      key={i}
                      // sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell>{i + 1}</TableCell>
                      <TableCell>{row.firstName}</TableCell>
                      <TableCell>{row.lastName}</TableCell>
                      <TableCell>{row.course}</TableCell>
                      <TableCell>{row.section}</TableCell>
                      <TableCell>{row.age}</TableCell>
                      <TableCell>{row.contact}</TableCell>
                      <TableCell>{row.cnic}</TableCell>
                      <TableCell>{row.fatherName}</TableCell>
                      <TableCell>{row.fatherContact}</TableCell>
                      <TableCell>{row.fatherCnic}</TableCell>
                      <TableCell>{row.emergencyContact}</TableCell>
                    </StyledTableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </Box>
      </ThemeProvider>
    </>
  );
};

export default UsersRecord;
