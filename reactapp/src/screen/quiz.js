import React from 'react'

const Quiz = () => {
  
  const temp = 
    {
      quizTitle: "abc",
      quizCourse: "abc1",
      questionsArr: [
        {
          question: "question1",
          optionsArr: [
            { option: "option1", isCorrect: true },
            { option: "option2", isCorrect: false },
            { option: "option3", isCorrect: false },
          ],
        },
        {
          question: "question2",
          optionsArr: [
            { option: "option1", isCorrect: true },
            { option: "option2", isCorrect: false },
            { option: "option3", isCorrect: false },
          ],
        },
        {
          question: "question3",
          optionsArr: [
            { option: "option1", isCorrect: true },
            { option: "option2", isCorrect: false },
            { option: "option3", isCorrect: false },
          ],
        },
      ],
    }
  const {question,optionsArr:[{option}]}=temp.questionsArr;
 
 let abc= temp.questionsArr.map((e,i)=>{return e.optionsArr})
console.log(abc)

  ;
  console.log(question)
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
  return (
  <>
  <h1>quiz</h1>
  <p>{temp.quizTitle}</p>
  <p>{temp.quizCourse}</p>
  {/* employeesData.map(
  ({ name, address, attributes: { height, hairColor, eye }, gender }, index) => {
    return name, address, height, hairColor, eye
  }
) */}
  </>
  )
}

export default Quiz