import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import IndexPage from "./pages/IndexPage";
import RegisterConsultantPage from "./pages/RegisterConsultantPage";
import axios from "axios";
import { UserContextProvider } from "./UserContext";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import BookingConfirmationPage from "./pages/BookingConfirmationPage";
import Consultant from "./pages/Consultant";
import BlogDetails from "./pages/BlogDetails";

axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL;
axios.defaults.withCredentials = true;

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<IndexPage />} />

          {/* Authentication */}

          <Route
            path="/RegisterConsultantPage"
            element={<RegisterConsultantPage />}
          />

          {/* pages */}
          <Route path="/Insights" element={<Blog />} />
          <Route path="/Insights/:id" element={<BlogDetails />} />

          <Route path="/insights" element={<Blog />} />

          <Route path="/consultant/:id" element={<Consultant />} />

          <Route
            path="/booking-confirmed"
            element={<BookingConfirmationPage />}
          />

          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
