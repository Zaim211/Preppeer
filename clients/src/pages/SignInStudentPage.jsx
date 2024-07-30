import { useContext, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { UserContext } from "../UserContext";
import axios from "axios";

export default function SignInStudentPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);
    const [emailError, setEmailError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const { setUser } = useContext(UserContext);

    async function loginUser(ev) {
        ev.preventDefault();
        setEmailError("");
        setPasswordError("");
        try {
            const { data } = await axios.post("/api/SignInStudent", { email, password });
            localStorage.setItem('token', data.token); // Store the token
            setUser(data.user);
            setRedirect(true);
        } catch (error) {
            if (error.response && error.response.data) {
                const { message } = error.response.data;
                if (message === "Email not found") {
                    setEmailError("This email doesn't exist in database.");
                } else if (message === "Invalid password") {
                    setPasswordError("Password not valid. Please try again.");
                } else {
                    alert("Login failed. Please try again.");
                }
            } else {
                alert("Login failed. Please try again.");
            }
        }
    }

    if (redirect) {
        return <Navigate to={"/"} />;
    }

    return (
        <div className="flex items-center h-full w-full justify-center " style={{ backgroundColor: "#060724" }}>
            <div className="mb-60 mt-16">
                <h1 className="h1-semibold text-center text-white mb-4">Login</h1>
                <form className="max-w-md mx-auto p-12 mt-6 space-y-2 border border-gray-200 rounded-2xl shrink-0 shadow-md" 
                onSubmit={loginUser}>
                    <input
                        className="border p-4 rounded-lg w-full mb-4"
                        type="email"
                        placeholder="your@email.com"
                        value={email}
                        onChange={ev => setEmail(ev.target.value)}
                    />
                    {emailError && <div className="text-red-500">{emailError}</div>}
                    <input
                        className="border p-4 rounded-lg w-full mb-4"
                        type="password"
                        placeholder="password"
                        value={password}
                        onChange={ev => setPassword(ev.target.value)}
                    />
                    {passwordError && <div className="text-red-500">{passwordError}</div>}
                   <div className="mt-6">
                   <button className="bg-orange-500 text-white text-xl mt-4 py-2 px-4 rounded w-full">
                   SignIn</button>
                   </div>
                    <div className="text-center py-2 text-gray-500">
                        <Link className="underline  text-white" to={"/forgot-password"}>
                            Forgot Password?
                        </Link>
                    </div>
                    <div className="text-center py-2 text-gray-500">
                        Don't have an account yet?{" "}
                        <Link className="underline text-white" to={"/RegisterStudentPage"}>
                            Register now
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
