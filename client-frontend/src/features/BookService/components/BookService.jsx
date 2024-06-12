import React from "react";
import InformationCarosal from "./InformationCarosal.jsx";
import BookingForm from "./BookingForm.jsx";
import { useParams } from "react-router-dom";

function BookService() {
  const offerType = useParams();

  return (
    <div className="bg-white">
      <div className="grid md:grid-cols-[70%_30%] bg-gray-300">
        <div className="m-10">
          <InformationCarosal offerType= {offerType.servicetype}/>
          <div className="flex items-center h-16 text-2xl font-semibold bg-white text-black pl-4">
            {offerType.servicetype}
          </div>
        </div>

        <BookingForm />
      </div>
    </div>
  );
}

export default BookService;
