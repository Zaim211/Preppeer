import React, { useContext } from 'react';
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
import { FaInstagram, FaTwitter } from 'react-icons/fa';
import { UserContext } from '../UserContext';

const Footer = () => {
  const { consultant } = useContext(UserContext);
  return (
    <footer className="text-gray-700" style={{ backgroundColor: "#060724" }}>
      <div className="container mx-auto py-8 px-4">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex flex-col items-center sm:items-start space-y-6 sm:space-y-4 sm:w-1/4">
            <p className="text-2xl font-semibold text-white text-center sm:text-left mb-4">
              Book the most in-demand experts & get advice over a video call
            </p>
            <Link
              to={consultant ? '/ConsultantProfile' : '/be-an-insider'}
              className="bg-orange-600 font-semibold text-2xl text-white px-4 py-2 rounded-lg hover:bg-orange-400 transition mb-4"
            >
              Become an insider
            </Link>

            <div className="text-xl text-center text-white sm:text-left flex flex-wrap justify-center sm:justify-start space-x-2">
              <span>•</span>
              <Link to="/policy" className="hover:underline">Policy</Link>
              <span>•</span>
              <Link to="/terms" className="hover:underline">Terms</Link>
            </div>
            <p className="text-xl text-white text-center sm:text-left">
              Prepeer 2024. ALL RIGHTS RESERVED
            </p>
            <Link to='/' className="flex justify-center sm:justify-start mt-4">
              <img src={logo} alt="logo" className="w-32 h-22 object-cover" />
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row sm:space-x-8 mt-8 sm:mt-0">
            <div className="flex flex-col space-y-2 sm:w-1/4">
              <p className="font-bold text-white text-2xl mb-2">Company</p>
              <Link to="/about" className="text-white text-xl hover:underline">About</Link>
              <Link to="/careers" className="text-white text-xl hover:underline">Careers</Link>
              <Link to="/faq" className="text-white text-xl hover:underline">FAQ</Link>
              <Link to="/gift-a-session" className="text-white text-xl hover:underline">Gift a Session</Link>
              <Link to="/experts" className="text-white text-xl hover:underline">Experts</Link>
            </div>

            <div className="flex flex-col space-y-2 sm:w-1/4 mt-4 sm:mt-0">
              <p className="font-bold text-white text-2xl mb-2">Support</p>
              <Link to="/support" className="text-white text-xl hover:underline">Support</Link>
              <Link to="/contact" className="text-white text-xl hover:underline">Contact</Link>
              <Link to="/feedback" className="text-white text-xl hover:underline">Give Us Feedback & Earn</Link>
              <Link to="/suggest-feature" className="text-white text-xl hover:underline">Suggest a Feature & Earn</Link>
              <Link to="/suggest-topic" className="text-white text-xl hover:underline">Suggest a New Topic or Expert</Link>
            </div>

            <div className="flex flex-col space-y-2 sm:w-1/4 mt-4 sm:mt-0">
              <p className="font-bold text-white text-2xl mb-2">Follow us</p>
              <div className="flex justify-center sm:justify-start gap-4">
                <a href="https://instagram.com" className="text-white hover:text-blue-600" target="_blank" rel="noopener noreferrer">
                  <FaInstagram className="text-4xl" />
                </a>
                <a href="https://twitter.com" className="text-white hover:text-blue-500" target="_blank" rel="noopener noreferrer">
                  <FaTwitter className="text-4xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
