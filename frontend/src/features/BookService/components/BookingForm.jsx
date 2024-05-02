import React, { useState } from "react";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import multiMonthPlugin from "@fullcalendar/multimonth";
const SelectServiceDate = ({ handleServiceDate }) => {
  const handleDateClick = (arg) => {
    handleServiceDate(arg.dateStr);
  };

  return (
    <>
      <div
        className="w-80  font-medium text-xs
        absolute bottom-[0px] left-[-50px] rounded-md bg-white"
      >
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin, multiMonthPlugin]}
          initialView="dayGridMonth"
          dateClick={handleDateClick}
          contentHeight={320}
        />
      </div>
    </>
  );
};

function BookingForm() {
  const [openCalender, setOpenCalender] = useState(false);
  const [bookingDetails, setBookingDetails] = useState({
    pincode: "",
    name: "",
    mobile: "",
    model: "",
    bookingDate: "",
    mobileOtp: "",
  });

  const handleServiceDate = (date) => {
    setBookingDetails((prev) => {
      return { ...prev, bookingDate: date };
    });
    setOpenCalender(false);
  };

  const handleBookingDetails = (e) => {
    setBookingDetails((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = () => {
    alert(bookingDetails);
    console.log(bookingDetails);
  };

  return (
    <div className="flex flex-col space-y-4 bg-white m-10 p-8 font-thin text-sm">
      <h1 className="text-2xl font-semibold text-center">Book a Service</h1>
      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md "
        type="text"
        placeholder="Pincode"
        name="pincode"
        onChange={handleBookingDetails}
      ></input>

      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md"
        type="text"
        placeholder="Name"
        name="name"
        onChange={handleBookingDetails}
      ></input>

      <div className="sm:grid sm:grid-cols-3 sm:gap-4 ">
        <div className="relative sm:col-span-2">
          <input
            className="w-full bg-gray-100 h-10 outline-none rounded-md px-2"
            type="text"
            placeholder="Mobile"
            name="mobile"
            onChange={handleBookingDetails}
          ></input>
          <button className="absolute h-[50%] top-[25%] right-2 px-1 rounded-sm bg-green-200 font-medium">
            Verify
          </button>
        </div>

        <input
          className="w-full bg-gray-100 h-10 px-2 outline-none rounded-md mt-4 sm:mt-0"
          type="text"
          placeholder="Enter OTP"
          name="mobileOtp"
          onChange={handleBookingDetails}
        ></input>
      </div>

      <select
        className="outline-none bg-gray-100 h-10 px-2 rounded-md"
        name="model"
        onChange={handleBookingDetails}
      >
        <option>Make & Model</option>
        <option value={"swift petrol"}>Swift Petrol</option>
        <option value={"swift diesel"}>Swift Diesel</option>
        <option value={"s cross"}>S Cross</option>
        <option value={"kia celtos"}>Kia Celtos</option>
      </select>

      <div className="relative flex justify-between">
        <span className="text-xl xs:text-2xl w-fit font-semibold">Rs 2999</span>
        <button
          className="bg-gray-100 h-10 px-2 rounded-md"
          onClick={() => setOpenCalender(true)}
        >
          {bookingDetails.bookingDate.length > 0
            ? bookingDetails.bookingDate
            : "Select Date"}
        </button>

        {openCalender && (
          <SelectServiceDate handleServiceDate={handleServiceDate} />
        )}
      </div>

      <button
        className="font-medium py-1 w-fit self-center px-6 border-[1px] border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-sm"
        onClick={handleSubmit}
      >
        Confirm
      </button>
    </div>
  );
}

export default BookingForm;
