import React from "react";
import InformationCarosal from "./InformationCarosal.jsx";
import BookingForm from "./BookingForm.jsx";

function BookService() {
  return (
    <div className="bg-white">
      <div className="grid sm:grid-cols-2 bg-gray-300">
        <InformationCarosal />
        <BookingForm />
      </div>
    </div>
  );
}

export default BookService;
