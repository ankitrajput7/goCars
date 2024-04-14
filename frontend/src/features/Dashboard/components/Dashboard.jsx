import React from "react";
import OfferesCarosal from "./OfferesCarosal.jsx";
import PromotionCarosal from "./PromotionCarosal.jsx";
import { GiRoundShield } from "react-icons/gi";
import booking_steps_image from "../../../assets/images/booking-steps.png";
import car_technician_icon from "../../../assets/images/car-technician-icon.png";
import Testimonials from "./Testimonials.jsx";

function Dashboard() {
  return (
    <div className="">
      <PromotionCarosal />
      <OfferesCarosal />

      <div className="flex flex-col p-10">
        <h1 className="self-center text-xl sm:text-2xl font-bold">
          Quick Booking Steps
        </h1>

        <div className="flex self-center space-x-20">
          <ul className="text-base sm:text-xl self-center pt-6 space-y-3">
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>
              <span>Enter your locality & contact details</span>
            </li>
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>{" "}
              <span>Choose the required service</span>
            </li>
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>
              <span>Leave the rest to our service experts</span>
            </li>
          </ul>
          <img
            className="h-48 hidden sm:flex"
            src={booking_steps_image}
            alt="bookig-steps"
          ></img>
        </div>
      </div>

      <div className="bg-gray-300 flex flex-col p-8">
        <h1 className="self-center text-xl sm:text-2xl font-bold">
          Trusted Works
        </h1>

        <div className="flex self-center sm:space-x-20">
          <img
            className="h-48 hidden sm:flex"
            src={car_technician_icon}
            alt="car-technician-icon"
          ></img>
          <ul className="text-base sm:text-xl pt-6 space-y-3">
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>
              <span>Expert mechanics for your every need</span>
            </li>
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>{" "}
              <span>Best-in-class workmanship</span>
            </li>
            <li className="flex items-center space-x-2">
              <div>
                <GiRoundShield />
              </div>

              <span>
                Top of the line equipment for the best service experience
              </span>
            </li>
          </ul>
        </div>
      </div>

      <Testimonials />
    </div>
  );
}

export default Dashboard;
