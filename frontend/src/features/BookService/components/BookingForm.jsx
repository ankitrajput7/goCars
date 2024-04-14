import React from "react";

function BookingForm() {
  return (
    <div className="flex flex-col space-y-4 bg-white m-8 p-8 font-thin">
      <h1 className="text-2xl font-semibold text-center">Book a Service</h1>
      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md "
        type="number"
        placeholder="Pincode"
      ></input>

      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md"
        type="text"
        placeholder="Name"
      ></input>

      <div className="grid grid-cols-2 gap-4">
        <input
          className="bg-gray-100 h-10 px-2 outline-none rounded-md"
          type="number"
          placeholder="Mobile Number"
        ></input>
        <div className="grid grid-cols-2 space-x-1">
          <button className="bg-green-200 space-x-1">Verify</button>
          <input
            className="bg-gray-100 h-10 px-2 outline-none rounded-md"
            placeholder="Code"
          ></input>
        </div>
      </div>

      <input
        className="bg-gray-100 h-10 px-2 outline-none rounded-md"
        placeholder="Pincode"
      ></input>

      <div className="flex justify-between">
        <span className="text-xl xs:text-2xl w-fit font-semibold">Rs 2999</span>
        <input
          className="bg-gray-100 h-10 px-2 outline-none rounded-md w-fit"
          placeholder="Pincode"
          type="date"
        ></input>
      </div>

      <button className=" font-normal w-fit self-center px-4 border-[1px] border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-white rounded-sm">
        Confirm
      </button>
    </div>
  );
}

export default BookingForm;
