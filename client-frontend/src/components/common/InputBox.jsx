import React from "react";

const InputBox = ({ handleBookingDetails, inputDetails }) => {
  const { placeholder, name } = inputDetails;

  return (
    <input
      className="bg-gray-100 h-10 px-2 outline-none rounded-md "
      type="text"
      placeholder={placeholder}
      name={name}
      onChange={handleBookingDetails}
    ></input>
  );
};

export default InputBox;
