import React, { useState, useEffect } from "react";
import MyResponsiveDrawer from "../../components/drawer";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import Heading from "../../components/Heading";
import MyInput from "../../components/myInput";
import MySelect from "../../components/mySelect";
import { getData, sendData } from "../../config/firebaseMethods";
import AddIcon from "@mui/icons-material/Add";
import { Typography } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Checkbox from "@mui/material/Checkbox";

const QuizForm = () => {
  const [model, setModel] = useState({});
  const [courseList, setCourseList] = useState([]);
  const [course, setCourse] = useState("");
  const [dbObj, setDbObj] = useState([]);
  const [question, setQuestion] = useState({});
  const [questionArr, setQuestionArr] = useState([]);
  const [option, setOption] = useState({});
  const [optionArr, setOptionArr] = useState([]);
  const [correctAns, setCorrectAns] = useState("");
  const getFromDB = () => {
    getData(`toDBcourseInfo/`)
      .then((res) => {
        // console.log(res);
        // console.log(course);

        // console.log(courseList);

        // let [{courseName}]=res ;
        // console.log(courseName)
        let tempArr = res;
        // let tempCourse = [];
        // setAssTrainerArr([...assTrainerArr, assTrainer]);

        //achievement
        // setCourseList(...courseList,(tempArr.map((e, i) =>  e.courseName)));
        // setCourseList(...courseList,
        //   {label: `${tempArr.map((e,i)=>(e.courseName))}` }
        //   );
        // model[key] = value;
        // console.log(model);
        // setModel({ ...model });
        setCourseList(
          ...courseList,
          res.map((e, i) => ({ label: e.courseName, value: e.courseName }))
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getFromDB();
    // const location = useLocation();
  }, []);
  const fillModel = (key, value) => {
    model[key] = value;
    console.log(model);
    setModel({ ...model });
  };
  const addOption = () => {
    setOptionArr([...optionArr, option]);

    // fillModel("optionArr", optionArr);
  };
  const submitQuiz = () => {
    model.questionArray = questionArr;
    sendData(model, `toDBquizForm/`)
      .then((res) => {
        console.log(res);
        // setGlobalState("isDataAdded",true)

        // navigate("/result")

        // navigate("/courseFormResult");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addQuestion = () => {
    let tempQuest =
      // questionArr.question = question;
      // (question.optionArr = optionArr.map((x) => x.value));
      (question.optionArr = optionArr.map((x) => x));
    question.correctAns = optionArr.find((x) => x.isChecked == true).value;
    setQuestionArr([...questionArr, question]);
    console.log(question);
    console.log(questionArr);
    // setOption("")
    // setOptionArr([])
    // setQuestion({})
    // setOptionArr([...optionArr, option]);
    // fillModel("optionArr", optionArr);
  };
  const drawerWidth = 200;
  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  return (
    <>
      {/* {console.log(course)} */}
      {/* {console.log(courseList)} */}
      <Box
        className="bgLight"
        sx={{
          // backgroundColor: "#E7D045",
          display: "flex",
          justifyContent: "start",
        }}
      >
        <MyResponsiveDrawer />
        <Box
          sx={{
            marginTop: "3rem",

            padding: "1rem",
            width: `calc(100% - ${drawerWidth}px)`,
          }}
        >
          {/* code here */}

          <Grid container sx={{}}>
            </Grid>
            <Grid
              item
              sx={{
                display: "flex",
                padding: 1,
                justifyContent: "space-between",
              }}
              md={12}
              xs={12}
            >
              <Heading title={"Create Quiz"} />

              {/* <Button variant="contained" >
  Create Quiz
</Button> */}
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <MyInput
                focused
                required
                color={"secondary"}
                label={"Enter Quiz Title"}
                variant={"filled"}
                onChange={(e) => {
                  fillModel("quizTitle", e.target.value);
                }}
              />

              {/* {courseList.map((e,i)=>(<p>{e.label}</p>))} */}
              <MyInput
                focused
                required
                type="number"
                color={"secondary"}
                label={"Enter Quiz Marks"}
                variant={"filled"}
                onChange={(e) => {
                  fillModel("quizMarks", e.target.value);
                }}
              />
              <MyInput
                label={"Enter Duration in minutes"}
                variant={"filled"}
                focused
                required
                type="number"
                color={"secondary"}
                onChange={(e) => {
                  fillModel("quizDuration", e.target.value);
                }}
              />
              <MySelect
                arr={courseList ?? [{ value: "null", label: "null" }]}
                label={"Courses"}
                onChange={(e) => {
                  fillModel("quizCourse", e.target.value);
                }}
              />
            </Grid>

            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // border:2,
              }}
            >
              <Box sx={{ display: "flex" }}>
                <MyInput
                  focused
                  required
                  fullWidth
                  // size={"large"}
                  color={"secondary"}
                  label={"Enter Question"}
                  variant={"outlined"}
                  onChange={(e) => {
                    setQuestion({ question: e.target.value });
                  }}
                />
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={addQuestion}
                >
                  Submit Question
                </Button>
              </Box>
              <Box
                sx={{
                  width: "40%",
                  display: "flex",
                  justifyContent: "center",
                  //  border:1,
                  borderRadius: 5,
                }}
              >
                <MyInput
                  focused
                  required
                  size={"small"}
                  color={"secondary"}
                  label={"Enter Options"}
                  variant={"outlined"}
                  onChange={(e) => {
                    setOption({ value: e.target.value, isChecked: false });
                    // fillModel("quizTitle", e.target.value);
                  }}
                />
                <IconButton>
                  <AddIcon onClick={addOption} />
                </IconButton>
              </Box>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // border:2,
              }}
            >
              <Box
                sx={{
                  border: 1,
                  // display:"flex",
                  alignItems: "baseline",
                }}
              >
                {/* <Checkbox {...label} /> */}
                {optionArr && optionArr.length > 0
                  ? optionArr.map((x, i) => (
                      <Box
                        sx={{
                          display: "flex",
                          // justifyContent:"flexStart", alignItem:"flexEnd"
                        }}
                      >
                        <Box
                          sx={
                            {
                              // border:1
                            }
                          }
                        >
                          <Checkbox
                            onClick={(e) => (x.isChecked = true)}
                            {...label}
                          />
                        </Box>
                        <Box
                          sx={{
                            // border:1,
                            paddingTop: 1,
                            // display:"flex",alignItem:"flexEnd",
                            // justifyContent:"center"
                          }}
                        >
                          <Typography>{x.value}</Typography>
                        </Box>
                      </Box>
                    ))
                  : null}
              </Box>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // border:2,
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                onClick={submitQuiz}
              >
                Submit Quiz
              </Button>
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // border:2,
              }}
            >
               <Grid
              item
              md={12}
              xs={12}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                // border:2,
              }}
            >
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  )
  
};

export default QuizForm;
{/* {questionArr.map((e,i)=>())} */}
