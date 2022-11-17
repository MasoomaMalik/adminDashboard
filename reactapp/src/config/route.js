import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Signup from '../screen/signup'
import Login from '../screen/login'
import AdminDashboard from '../screen/adminDashboard'
import UserScreen from '../screen/userScreen'
import DummyPage from '../screen/dummypage'
import PasswordReset from '../screen/passwordReset'

 

function AppRouter() {

    return (
        <>
        <Router>

            <Routes>
                <Route path="/" element={<Signup/> }/>
                <Route path="login" element={<Login/> }/>
                <Route path="passwordReset" element={<PasswordReset/> }/>
                <Route path="adminDashboard/:id/*" element={<AdminDashboard/> }/>
                <Route path="userScreen/:id" element={<UserScreen/> }/>
                <Route path="dummypage" element={<DummyPage/> }/>
                 
                
            </Routes>
        </Router>
        </>
    )
}
export default AppRouter