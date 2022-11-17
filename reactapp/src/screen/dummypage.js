import React from "react";
// all imports
//MUI
import {
  Button,
  CircularProgress,
  Grid,
  Typography,
  ThemeProvider,
  TextField,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";

//react
import { useEffect, useState } from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import MyButton from "../components/myButton";
import { deleteData, getData, sendData } from "../config/firebaseMethods";
import MyGrid from "../components/myGrid";
import MyInput from "../components/myInput";
import MySwitch from "../components/mySwitch";
import MyRadio from "../components/myRadio";
import BasicDatePicker from "../components/myDatePicker";
import MyCheckbox from "../components/myCheckbox";
const DummyPage = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [isUser, setIsUser] = useState(false);
  const [fullScreenLoader, setFullScreenLoader] = useState(false);
  const [isLoading, setLoader] = useState(false);
  const [dbObj, setDbObj] = useState({});
  const [model, setModel] = useState({});
  const [isEdit, setIsEdit] = useState(false);
  const [dob, setDob] = useState("");
  const obj = {
    key1: "val1",
    key2: "val2",
    key3: "val3",
    key4: "val4",
  };
  const Cols = [
    { key: "key1", displayName: "Key 1" },
    { key: "key2", displayName: "Key 2" },
    { key: "key3", displayName: "Key 3" },
    { key: "key4", displayName: "Key 4" },
  ];
  const getUserData = () => {
    getData("test")
      .then((res) => {
        console.log(res);
        setDbObj(res);
      })
      .catch((err) => {
        console.log(err);
        setDbObj([]);
      });
  };

  useEffect(() => {
    getUserData();
  }, []);

  const sendUserData = () => {
    console.log("dfsfs");
    setLoader(true);
    sendData(obj, "test")
      .then((res) => {
        console.log(res);
        getUserData();
        // navigate("/login")
        setLoader(false);
      })
      .catch((err) => {
        console.log(err);
        setLoader(false);
      });
  };
  const handleDelete = (e) => {
    console.log("delete");
    console.log(e.dataId);

    deleteData("test", e.dataId)
      .then((res) => {
        console.log(res);
        getUserData();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleEdit = (e) => {
    setIsEdit(true);
    console.log("edit");
    model.dataId = e.dataId;
    console.log(e.dataId);

    // sendData(model, "test", e.dataId)
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
  };

  const handleUpdate = () => {
    sendData(model, "test", model.dataId)
      .then((res) => {
        console.log(res);
        getUserData();
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

  const extractDateMonthYear = (e) => {
    console.log(e);
    let birthYear = e.$y;

    const current = new Date();
    let currYear = current.getFullYear();
    let age = currYear - birthYear;
    console.log(birthYear);
    // fillModel("age", age);
  };

  return (
    <>
      <Box>
        <MyButton
          //   width={225}
          //   height={50}
          variant="contained"
          //   type="submit"
          disabled={isLoading}
          isLoading={isLoading}
          label="Add data"
          onClick={sendUserData}
        />
        <MyButton
          //   width={225}
          //   height={50}
          variant="contained"
          //   type="submit"
          disabled={isLoading}
          isLoading={isLoading}
          label="Get data"
          onClick={getUserData}
        />
        <MyGrid
          datasource={dbObj}
          Cols={Cols}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
        {isEdit ? (
          <Grid container sx={{ width: { md: "40vw", xs: "autp" } }}>
            {Cols.map((e, i) => (
              <>
                {console.log(e.displayName)}
                <Grid item md={6} sm={12} sx={{ padding: 1 }}>
                  <TextField
                    size="small"
                    label={e.displayName}
                    variant={"filled"}
                    onChange={(y) => {
                      fillModel(e.key, y.target.value);
                    }}
                  />
                </Grid>
              </>
            ))}
            <Grid
              item
              md={12}
              xs={12}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <MyButton
                variant="contained"
                label="Done Editing"
                onClick={(e) => {
                  setIsEdit(false);
                  handleUpdate();
                }}
              />
            </Grid>
          </Grid>
        ) : null}
      </Box>

      <Box>
        <h4>testing components</h4>
        <h6>switch</h6>
        <MySwitch
          defaultChecked={true}
          disabled={false}
          label={"switch"}
          onChange={(e) => {
            console.log(e.target.checked);
            //setstate(e.target.checked)
          }}
        />
      </Box>

      <Box>
        <h6>radio buttons</h6>
        <MyRadio
          arr={[
            { value: "male", label: "Male" },
            { value: "female", label: "Female" },
          ]}
          defaultValue={"female"}
          onClick={(e) => {
            console.log(e.target.value);
          }}
          formLabel={"Gender Category"}
          // row={"row"}
        />
      </Box>
      <Box>
        <h6>date ipcker</h6>
        <BasicDatePicker
          value={dob}
          onChange={(e) => {
            // setDob(e);
            console.log(e);
            extractDateMonthYear(e);
          }}
        />
      </Box>
      <Box>
        <h6>checkbox</h6>
        <MyCheckbox
          defaultChecked={true}
          checkboxLabel={"pls check"}
          disabled={false}
          onChange={(e) => {
            console.log(e.target.checked);
          }}
        />
      </Box>
    </>
  );
};

export default DummyPage;
