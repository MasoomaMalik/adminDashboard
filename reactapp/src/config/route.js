import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from '../screen/signup'
import Login from '../screen/login'
// import {CourseForm} from '../screen/adminDashboardScreens/courseForm'
// import {CourseFormResult} from '../screen/adminDashboardScreens/courseFormResult'

import Home from '../screen/userRegistrationForm'
import Dashboard from '../screen/adminDashboard'
import FormSubmitMessage from '../screen/formSubmitMessage'
import UsersRecord from '../screen/adminDashboardScreens/usersRecord'
import CourseFormResult from '../screen/adminDashboardScreens/courseFormResult'
import CourseForm from '../screen/adminDashboardScreens/courseForm'
import QuizForm from '../screen/adminDashboardScreens/quizForm'
import Cities from '../screen/adminDashboardScreens/cities'
import Countries from '../screen/adminDashboardScreens/countries'
import QuizList_Preview from '../screen/adminDashboardScreens/quizResult'
import QuizResult from '../screen/adminDashboardScreens/quizResult'
import Quiz from '../screen/quiz'

function AppRouter() {

    return (
        <>
        <Router>

            <Routes>
                <Route path="/" element={<Signup/> }/>
                <Route path="login" element={<Login/> }/>
                <Route path="adminDashboard/:id" element={<Dashboard/> }/>
                {/* <Route path="adminDashboard/:id/usersRecord" element={<UsersRecord/> }/> */}
                <Route path="adminDashboard/usersRecord" element={<UsersRecord/> }/>
                <Route path="adminDashboard/courseForm" element={<CourseForm/> }/>
                <Route path="adminDashboard/courseFormResult" element={<CourseFormResult/> }/>
                <Route path="adminDashboard/quizForm" element={<QuizForm/> }/>
                <Route path="adminDashboard/cities" element={<Cities/> }/>
                <Route path="adminDashboard/countries" element={<Countries/> }/>
                <Route path="adminDashboard/quizResult" element={<QuizResult/> }/>
                <Route path="userRegistrationForm" element={<Home/> }/>
                <Route path="quiz" element={<Quiz/> }/>
                <Route path="formSubmitMessage" element={<FormSubmitMessage/> }/>
                <Route path="quiz/" element={<Quiz/>}></Route>
            </Routes>
        </Router>
        </>
    )
}
export default AppRouter