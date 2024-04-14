import React from "react";
import logo from "../../assets/images/logo.png";
import { MdEditLocation } from "react-icons/md";
import { GrContact } from "react-icons/gr";
import poster_goCars_withoutBg from "../../assets/images/poster-goCars-withoutBg.png";

function Header() {
  const slogan = "Keep Going with goCars";

  return (
    <header className="sticky top-0 z-[999] flex flex-col bg-gray-100 w-full shadow-2xl max-w-[1500px]">
      <div className="flex justify-between h-12 xs:h-20 ">
        <div className="flex space-x-4 items-center ml-2">
          <img className="h-20 " src={logo} alt="logo"></img>
          <h1 className="text-base lg:text-xl font-bold text-blue-900 hidden xs:inline">
            {slogan}
          </h1>
        </div>

        <div className="flex space-x-4 items-center text-base lg:text-lg font-md mr-4">
          <button className="hidden sm:flex items-center space-x-1">
            <GrContact /> <span>Contact</span>
          </button>
          <button className="flex items-center space-x-1 sm:p-0">
            <MdEditLocation /> <span>Indore</span>
          </button>
          <img
            className="w-36 h-16 hidden xs:inline"
            src={poster_goCars_withoutBg}
            alt="partner"
          ></img>
        </div>
      </div>

      <div className="flex flex-col xs:hidden">
        <h1 className="text-base self-center font-bold text-blue-900 ">
          {slogan}
        </h1>
        {/* <img
          className="w-[80%] h-14  self-center"
          src="https://storage.googleapis.com/bkt-gobumper-prod-web-app-static/Castrol%20Logo-01.svg"
          alt="partner"
        ></img> */}
      </div>
    </header>
  );
}

export default Header;
