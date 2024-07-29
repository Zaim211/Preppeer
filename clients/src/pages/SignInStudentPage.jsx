import React, { useContext, useState } from 'react';
import axios from 'axios';
import { Link, Navigate } from 'react-router-dom';
import { UserContext } from '../UserContext';



const SignInStudentPage = () => {
  const { setStudent } = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!email) newErrors.email = 'Email is required';
    if (!email.includes('@')) newErrors.email = 'Email is invalid';
    if (!password) newErrors.password = 'Password is required';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const { data } = await axios.post('/api/SignInStudent', { email, password });
      setStudent(data);
      setSuccess('Login successful');
      setRedirect(true);
      setErrors({});
    } catch (error) {
      setErrors({ submit: 'An error occurred while signing in' });
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md p-8 bg-white shadow-lg rounded-lg">
        <h1 className="text-2xl font-bold mb-4 text-center">Sign In</h1>
        {success && <p className="text-green-500 mb-4 text-center">{success}</p>}
        {errors.submit && <p className="text-red-500 mb-4 text-center">{errors.submit}</p>}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block font-semibold mb-1">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={email}
              onChange={ev => setEmail(ev.target.value)}
              className="border p-2 w-full"
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>
          
          <div>
            <label htmlFor="password" className="block font-semibold mb-1">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              value={password}
              onChange={ev => setPassword(ev.target.value)}
              className="border p-2 w-full"
            />
            {errors.password && <p className="text-red-500">{errors.password}</p>}
          </div>

          <button
            type="submit"
            className="bg-black text-white py-2 px-4 rounded w-full"
          >
            Sign In
          </button>
          {/* <OAuth /> */}
        </form>
        
        <div className="text-center py-4 text-gray-500">
          Don't have an account?{' '}
          <Link className="underline text-black" to="/RegisterStudentPage">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SignInStudentPage;
