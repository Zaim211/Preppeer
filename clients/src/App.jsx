import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import IndexPage from './pages/IndexPage'
import VideoCallPage from './pages/VideoCallPage'
import RegisterStudentPage from './pages/RegisterStudentPage'
import RegisterConsultantPage from './pages/RegisterConsultantPage'
import SignInStudentPage from './pages/SignInStudentPage'
import SignInConsltantPage from './pages/SignInConsltantPage'

import axios from "axios";
import { UserContextProvider } from './UserContext'
import ConsultantProfilePage from './pages/ConsultantProfilePage'
import StudentProfilePage from './pages/StudentProfilePage'
// import OurMissions from './pages/OurMissions'
import Payment from './pages/Payment'
import MemberPage from './pages/MemberPage'
import Blog from './pages/Blog'
import NotFound from './pages/NotFound'
import BookingConfirmationPage from './pages/BookingConfirmationPage'
import Consultant from './pages/Consultant'
import BlogDetails from './pages/BlogDetails'


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
 return (

  <UserContextProvider>
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<IndexPage />} />

    {/* Authentication */}
    <Route path="/ConsultantProfile" element={<ConsultantProfilePage />} />
    <Route path='/StudentProfile' element={<StudentProfilePage />} />
    <Route path="/RegisterStudentPage" element={<RegisterStudentPage />} />
    <Route path="/RegisterConsultantPage" element={<RegisterConsultantPage />} />
    <Route path="/SignInStudentPage" element={<SignInStudentPage />} />
    <Route path="/SignInConsltantPage" element={<SignInConsltantPage />} />

    {/* pages */}
    <Route path="/Insights" element={<Blog />}/>
    <Route path="/Insights/:id" element={<BlogDetails />}/>

    
    <Route path="/insider/:id" element={<VideoCallPage />} />
    <Route path="/be-an-insider" element={<MemberPage />} />
    <Route path="/blog" element={<Blog />} />
    <Route path='/insider/payment/:id' element={<Payment />} />
    <Route path='/consultant/:id' element={<Consultant/>} />

    <Route path='/booking-confirmed' element={<BookingConfirmationPage/>} />

    <Route path="*" element={<NotFound />} />
    
    </Route>
  </Routes>
  </UserContextProvider>
 )
}

export default App
