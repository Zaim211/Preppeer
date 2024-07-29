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
import OurMissions from './pages/OurMissions'
import Payment from './pages/Payment'
import CardGift from './pages/CardGift'
import MemberPage from './pages/MemberPage'
import Market from './pages/Market'
import Blog from './pages/Blog'


axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
 return (

  <UserContextProvider>
  <Routes>
    <Route path="/" element={<Layout />} >
    <Route index element={<IndexPage />} />
    <Route path="/insider/:id" element={<VideoCallPage />} />
    <Route path="/ConsultantProfile" element={<ConsultantProfilePage />} />
    <Route path='/StudentProfile' element={<StudentProfilePage />} />
    <Route path="/RegisterStudentPage" element={<RegisterStudentPage />} />
    <Route path="/be-an-insider/RegisterConsultantPage" element={<RegisterConsultantPage />} />
    <Route path="/SignInStudentPage" element={<SignInStudentPage />} />
    <Route path="/be-an-insider/SignInConsltantPage" element={<SignInConsltantPage />} />
    <Route path="/OurMissions" element={<OurMissions />}/>

    <Route path="/be-an-insider" element={<MemberPage />} />
    <Route path="/blog" element={<Blog />} />

    <Route path='/video-call/:id/payment' element={<Payment />} />

    <Route path="/market/:id" element={<Market />} />

    <Route path='/giftcard' element={<CardGift />} />
    </Route>
  </Routes>
  </UserContextProvider>
 )
}

export default App
