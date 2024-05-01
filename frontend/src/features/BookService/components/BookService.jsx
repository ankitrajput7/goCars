import React from "react";
import InformationCarosal from "./InformationCarosal.jsx";
import BookingForm from "./BookingForm.jsx";

function BookService() {
  return (
    <div className="bg-white">
      <div className="grid sm:grid-cols-[60%_40%] bg-gray-300">
        <div className="m-10">
          <InformationCarosal />
          <div className="flex items-center h-16 text-2xl font-semibold bg-white text-black">
            Booking Service
          </div>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}

export default BookService;
