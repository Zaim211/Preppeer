import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { useMediaQuery } from "react-responsive";
import NavMobile from "./NavMobile";
import { UserContext } from "../UserContext";

export default function Header() {
  const { consultant, ready } = useContext(UserContext);
  const isMobileDevice = useMediaQuery({ query: "(max-width: 768px)" });

  if (isMobileDevice) {
    return (
      <header className="wrapper mt-12 border-b">
        <NavMobile />
      </header>
    );
  }

  return (
    <header>
      <div className="flex w-full">
        
      </div>
    </header>
  );
}
