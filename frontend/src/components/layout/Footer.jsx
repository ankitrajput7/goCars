import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaSquarePhone } from "react-icons/fa6";

function Footer() {
  return (
    <div className="text-white max-w-[1500px]">
      <div className="bg-black/70 p-2 xs:p-8">
        {" "}
        <h1 className="text-sm xs:text-2xl font-bold text-center">goCars</h1>
        <p className="text-center text-xs xs:text-lg">
          &quot;Keep Going With goCars.&quot;
        </p>
        <ul className="flex justify-center space-x-4 text-sm xs:text-xl mt-4">
          <button>
            <FaFacebook />
          </button>
          <button>
            <FaInstagramSquare />
          </button>
          <button>
            <FaTwitter />
          </button>
          <button>
            <FaYoutube />
          </button>
          <button>
            <FaLinkedin />
          </button>
          <button>
            <IoLogoWhatsapp />
          </button>
          <button>
            <FaSquarePhone />
          </button>
        </ul>
      </div>

      <div className="font-bold text-center p-2 xs:p-4 bg-black/80 text-orange-600">
        Design By - Ankit Rajput
      </div>
    </div>
  );
}

export default Footer;
