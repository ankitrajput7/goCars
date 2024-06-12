import React, { useState } from "react";
import InputBox from "../../../components/common/InputBox.jsx";
import SelectServiceDate from "../../../components/common/SelectServiceDate.jsx";
import { inputDetails, modelDetails } from "../utils/constants.js";

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

  const [verifyOtp, setVerifyOtp] = useState(false);

  return (
    <div className="flex flex-col justify-items-center space-y-4 bg-white m-10 p-8 font-thin text-sm max-w-[300px]">
      <h1 className="text-2xl font-semibold text-center">Book a Service</h1>
      <InputBox
        handleBookingDetails={handleBookingDetails}
        inputDetails={inputDetails.pinCode}
      ></InputBox>
      <InputBox
        handleBookingDetails={handleBookingDetails}
        inputDetails={inputDetails.name}
      ></InputBox>

      <div className="relative xs:col-span-2">
        <div className="bg-gray-100 rounded-md">
          <InputBox
            handleBookingDetails={handleBookingDetails}
            inputDetails={inputDetails.mobile}
          ></InputBox>
        </div>

        <button
          className="absolute h-[50%] top-[25%] right-2 px-1 rounded-sm bg-green-200 font-medium"
          onClick={() => setVerifyOtp(true)}
        >
          Verify
        </button>
      </div>

      {verifyOtp && (
        <InputBox
          handleBookingDetails={handleBookingDetails}
          inputDetails={inputDetails.mobileOtp}
        ></InputBox>
      )}

      <select
        className="outline-none bg-gray-100 h-10 px-2 rounded-md"
        name="model"
        onChange={handleBookingDetails}
      >
        {modelDetails.map((model, index) => {
          return (
            <option value={model.value} key={index}>
              {model.name}
            </option>
          );
        })}
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
