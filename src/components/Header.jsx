import { getAuth, onAuthStateChanged } from "firebase/auth";
import React from "react";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Header() {
  const [pageState, setPageState] = useState("Sign in");
  const location = useLocation();
  const navigate = useNavigate();
  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setPageState("Profile");
      } else {
        setPageState("Sign in");
      }
    });
  }, [auth]);

  function generateClassStyle(route) {
    if (route === location.pathname) {
      return `cursor-pointer py-3 text-sm font-semibold  border-b-[3px] text-black border-b-red-500`;
    } else {
      return `cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent`;
    }
  }

  return (
    <div className="bg-white border-y shadow-sm sticky top-0 z-40">
      <header className="flex justify-between items-center px-3 max-w-6xl mx-auto">
        <div>
          <img
            src="https://static.rdc.moveaws.com/images/logos/rdc-logo-default.svg"
            alt="logo"
            className="h-5 cursor-pointer"
            onClick={() => {
              navigate("/");
            }}
          />
        </div>
        <div>
          <ul className="flex space-x-10">
            <li
              className={generateClassStyle("/")}
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </li>
            <li
              className={generateClassStyle("/offers")}
              onClick={() => {
                navigate("/offers");
              }}
            >
              Offers
            </li>
            <li
              className={generateClassStyle("/signIn")}
              onClick={() => {
                navigate("/profile");
              }}
            >
              {pageState}
            </li>
          </ul>
        </div>
      </header>
    </div>
  );
}
