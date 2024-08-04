import React from 'react'
// import Header from './components/Header';
// import Footer from './components/Footer';
import { Outlet } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col max-w-full mx-auto">
      <Outlet />
      <main className="flex-1">{children}</main>
      {/* <Footer /> */}
    </div>
  );
};