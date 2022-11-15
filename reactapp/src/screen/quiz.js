import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Button, Grid } from "@mui/material";
import { getData, sendData } from "../config/firebaseMethods";
import { Typography } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
const Quiz = () => {
  //   const temp =
  //     {
  //       quizTitle: "abc",
  //       quizCourse: "abc1",
  //       questionsArr: [
  //         {
  //           question: "question1",
  //           optionsArr: [
  //             { option: "option1", isCorrect: true },
  //             { option: "option2", isCorrect: false },
  //             { option: "option3", isCorrect: false },
  //           ],
  //         },
  //         {
  //           question: "question2",
  //           optionsArr: [
  //             { option: "option1", isCorrect: true },
  //             { option: "option2", isCorrect: false },
  //             { option: "option3", isCorrect: false },
  //           ],
  //         },
  //         {
  //           question: "question3",
  //           optionsArr: [
  //             { option: "option1", isCorrect: true },
  //             { option: "option2", isCorrect: false },
  //             { option: "option3", isCorrect: false },
  //           ],
  //         },
  //       ],
  //     }
  //   const {question,optionsArr:[{option}]}=temp.questionsArr;

  //  let abc= temp.questionsArr.map((e,i)=>{return e.optionsArr})
  // console.log(abc)

  //   ;
  //   console.log(question)
  // const employeesData = [
  //   {
  //     name: 'Saka manje',
  //     address: '14, cassava-garri-ewa street',
  //     attributes: {
  //       height: '6ft',
  //       hairColor: 'Brown',
  //       eye: 'Black',
  //     },
  //     gender: 'Male',
  //   },
  //   {
  //     name: 'Adrian Toromagbe',
  //     address: '14, kogbagidi street',
  //     attributes: {
  //       height: '5ft',
  //       hairColor: 'Black',
  //       eye: 'Red',
  //     },
  //     gender: 'Male',
  //   },
  // ]
  // let hairColor;
  // employeesData.map(
  //   ({ name, address, attributes: { height, hairColor, eye }, gender }, index) => {
  //     return name, address, height, hairColor, eye
  //   }
  // )
  const [dbObj, setDbObj] = useState([]);
  const [isAttempted, setIsAttempted] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [selectedQuiz, setSelectedQuiz] = useState({});
  const [selectedQuizID, setSelectedQuizID] = useState({});
  const [questionArr, setQuestionArr] = useState([]);
  const [answerArr, setAnswerArr] = useState([false]);
  const [score, setScore] = useState(0);
  // const [score, setScore] = useState("")

  const getFromDB = () => {
    //      getDataOnChild(`toDBcourseInfo/`)
    //     .then((res)=>{console.log(res)

    // let tempObj=res;
    //       setDbObj(dbObj=>[...dbObj,tempObj])

    //     })
    //     .catch((err)=>{console.log(err)})

    getData(`toDBquizForm/`)
      .then((res) => {
        // console.log(res);
        // let tempObj = res;
        setDbObj(res);
        dbObj.map((e, i) => (e.isAttempted = false));
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
  let getSelectedQuiz = () => {
    // console.log("hi");
    // console.log(selectedQuizID);
    setSelectedQuiz(dbObj.filter((e) => e.dataId == selectedQuizID)[0]);
    console.log(dbObj.filter((e) => e.dataId == selectedQuizID)[0]);
    setQuestionArr(selectedQuiz.questionArray);
    questionArr.map((e, i) => (answerArr[i] = false));
    // let tempL= questionArr.length;
  };
  let checkAns = (e, i, x, y) => {
    console.log(answerArr);
    answerArr[i] = false;
    console.log(e.correctAns);
    console.log(e.optionArr[y].value);
    if (e.optionArr[y].value === e.correctAns) {
      console.log(score);
      answerArr[i] = true;

      console.log("win");
      // console.log(e.correctAns);
    }
    // console.log(e)
  };
  let calcScore = () => {
    // setScore(score + 1);
    let tempArr = answerArr.filter((e, i) => e == true);
    console.log(tempArr.length);
    setScore(tempArr.length);
  };
  return (
    <>
      <h1>Available Quiz</h1>
      <Grid
        container
        sx={{
          // width: "auto",
          border: 1,
          // display:"flex"
        }}
      >
        {dbObj.map((e, i) => (
          <Grid item md={3} xs={3} key={e.dataId}>
            <Typography variant="h2">{e.quizTitle}</Typography>
            <Typography variant="subtitle">{e.quizCourse}</Typography>
            <Typography vairant="h6">
              {`Status: ${isAttempted ? "Attempted" : "Due"}`}:
            </Typography>

            {!isAttempted ? (
              <Button
                variant="contained"
                onClick={(x) => {
                  setSelectedQuizID(e.dataId);
                  // console.log(e);
                  {
                    // console.log(x);
                  }
                  getSelectedQuiz();
                }}
              >
                Attempt Now
              </Button>
            ) : (
              "abc"
            )}
          </Grid>
        ))}
      </Grid>

      <Box
      // sx={{display:"flex",width:"100%",justifyContent:"center" }}
      >
        {
          // console.log(optionArr)
        }
        {questionArr
          ? questionArr.map((e, i) => (
              <Grid
                container
                sx={{ border: 1, display: "flex", justifyContent: "center" }}
              >
                <Grid item md={12}>
                  <Typography variant="h6">{e.question}</Typography>
                </Grid>
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    border: 1,
                    padding: 3,
                  }}
                >
                  <FormControl>
                    {/* <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel> */}
                    <RadioGroup
                      aria-labelledby="demo-radio-buttons-group-label"
                      defaultValue="female"
                      name="radio-buttons-group"
                    >
                      {e.optionArr.map((x, y) => (
                        <Box sx={{ margin: "0.25rem" }}>
                          <FormControlLabel
                            value={x.value}
                            control={<Radio />}
                            label={x.value}
                            onClick={() => {
                              // console.log(e.optionArr, i);
                              // setAnswerArr([...answerArr,{"isChecked": isChecked}])
                              // setIsChecked(!isChecked);
                              // setAnswerArr()
                              //   [y].isChecked= true;
                              checkAns(e, i, x, y);
                            }}
                          />
                        </Box>
                      ))}
                    </RadioGroup>
                  </FormControl>
                </Box>
              </Grid>
            ))
          : null}
        <Box>
          <Button variant="contained" onClick={calcScore}>
            Submit
          </Button>
          {score?<Typography variant="h3">`Your Score is {score}`</Typography>:null}

        </Box>
      </Box>
    </>
  );
};

export default Quiz;
