import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function BookingForm() {
  const [selectDate, setSelectDate] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);

  const setServiceDate = (date) => {
    setSelectedDate(date);
  };

  const SelectServiceDate = ({ setServiceDate }) => {
    // const [date, setDate] = useState(new Date());
    // console.log(date);
    // // setServiceDate(date);
    const date = new Date();
    return (
      <div className="absolute bottom-0 left-[-400px] rounded-md bg-gray-600">
        <Calendar onChange={setServiceDate} value={date} />
      </div>
    );
  };

  return (
    <div className="flex flex-col space-y-4 bg-white m-10 p-8 font-thin text-sm">
      <h1 className="text-2xl font-semibold text-center">Book a Service</h1>
      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md "
        type="text"
        placeholder="Pincode"
      ></input>

      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md"
        type="text"
        placeholder="Name"
      ></input>

      <div className="grid grid-cols-3 gap-4">
        <div className="relative col-span-2">
          <input
            className="w-full bg-gray-100 h-10 outline-none rounded-md px-2"
            type="text"
            placeholder="Mobile"
          ></input>
          <button className="absolute h-[50%] top-[25%] right-2 px-1 rounded-sm bg-green-200 font-medium">
            Verify
          </button>
        </div>

        <input
          className="bg-gray-100 h-10 px-2 outline-none rounded-md"
          type="text"
          placeholder="Enter OTP"
        ></input>
      </div>

      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md"
        placeholder="Make & Model"
      ></input>

      <div className="relative flex justify-between">
        <span className="text-xl xs:text-2xl w-fit font-semibold">Rs 2999</span>
        {/* <input
          className="bg-gray-100 h-10 px-2 outline-none rounded-md w-fit"
          placeholder="Pincode"
          type="date"
        ></input> */}
        <button onClick={() => setSelectDate(true)}>
          {selectedDate ? selectedDate : "Select Date"}
        </button>
        {selectDate && <SelectServiceDate setServiceDate={setServiceDate} />}
      </div>

      <button className=" font-normal w-fit self-center px-4 border-[1px] border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-sm">
        Confirm
      </button>
    </div>
  );
}

export default BookingForm;
