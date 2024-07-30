import { useContext, useState } from "react";
import { UserContext } from "../UserContext.jsx";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function StudentProfilePage() {
  const [redirect, setRedirect] = useState(null);
  const { user, setUser, ready } = useContext(UserContext);

  async function logout() {
    await axios.post("/api/logout");
    setRedirect("/");
    setUser(null);
  }

  if (!ready) {
    return <div>Loading...</div>;
  }

  if (ready && !user && !redirect) {
    return <Navigate to={"/login"} />;
  }

  if (redirect) {
    return <Navigate to={redirect} />;
  }

  return (
    <div className="mb-6">
      <div className="mt-8 text-center mx-auto">
        Welcome <span className="h2-bold">{user.username}</span> to our{" "}
        <span className="h2-bold">Platform</span>
        <br />
        <h1 className="h2-bold mt-8">Here you can find all booking calls</h1>
        <br />
        <button className="logout-button" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
  );
}
