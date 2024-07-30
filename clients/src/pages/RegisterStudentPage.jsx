import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import AuthGoogle from "../components/AuthGoogle";

const RegisterStudentPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    const newErrors = {};
    if (!username) newErrors.name = "Name is required";
    if (!email) newErrors.email = "Email is required";
    if (!email.includes("@")) newErrors.email = "Email is invalid";
    if (!password) newErrors.password = "Password is required";
    if (password.length < 6) newErrors.password = "Password must be at least 6 characters long";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      await axios.post("/api/registerStudent", {
       username, email, password
      });
      setSuccess("Student registered successfully");
      setRedirect(true);
    } catch (error) {
      setErrors({ submit: "An error occurred while registering the student" });
      console.log("error registering student:", error);
    }
  };

  if (redirect) {
    return <Navigate to={'/SignInStudentPage'} />;
  }

  return (
    <div className="flex items-center  h-full w-full justify-center " style={{ backgroundColor: "#060724" }}>
      <div className="w-full max-w-xl p-12 border-gray-950 shadow-lg rounded-lg" >
        <h1 className="text-4xl font-bold mb-12 text-white text-center">Register Student</h1>
        {success && (
          <p className="text-green-500 mb-4 text-center">{success}</p>
        )}
        {errors.submit && (
          <p className="text-red-500 mb-4 text-center">{errors.submit}</p>
        )}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="flex gap-4">
            <div className="flex-1">
              <label htmlFor="username" className="block text-xl font-semibold text-white mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                name="username"
                value={username}
                onChange={ev => setUsername(ev.target.value)}
                className="border rounded-lg p-4 w-full"
              />
              {errors.username && <p className="text-red-500">{errors.username}</p>}
            </div>

            <div className="flex-1">
              <label htmlFor="email" className="block text-white text-xl font-semibold mb-1">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                name="email"
                value={email}
                onChange={ev => setEmail(ev.target.value)}
                className="border rounded-lg p-4 w-full text-xl"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>

          <div className="flex gap-4 mt-4">
            <div className="flex-1 mt-4 mb-4">
              <label htmlFor="password" className="block font-semibold text-white text-xl mb-1">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                name="password"
                value={password}
                onChange={ev => setPassword(ev.target.value)}
                className="border p-4 rounded-lg w-full"
              />
              {errors.password && <p className="text-red-500">{errors.password}</p>}
            </div>
          </div>

          <button type="submit" className="bg-orange-500 text-white text-xl py-2 px-4 rounded w-full">Register</button>
          <AuthGoogle />
          <div className="text-center py-4 text-xl text-white">
          Already a member?{' '}
          <Link className="underline text-white" to={"/SignInStudentPage"}>
            SignIn
          </Link>
        </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterStudentPage;
