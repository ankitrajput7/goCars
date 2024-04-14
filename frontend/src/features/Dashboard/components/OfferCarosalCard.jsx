/* eslint-disable jsx-a11y/interactive-supports-focus */
import React from "react";
import { useNavigate } from "react-router-dom";

function OfferCarosalCard({ offerDetail }) {
  const { offerType, posterImg, rate } = offerDetail;
  const navigate = useNavigate();

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      className="flex flex-col w-full sm:max-w-80 h-full  shadow-2xl mt-4 "
      onClick={() => {
        navigate("/book-service");
      }}
      role="button"
    >
      <img className="w-full h-40" src={posterImg} alt="posterImage"></img>
      <div className="flex justify-between p-2 text-base font-semibold">
        <span>{offerType}</span>{" "}
        <span className="text-orange-400">Rs {rate}</span>
      </div>
      <button className="border-[1px] border-orange-400 text-orange-400 shadow-md w-fit self-center px-4 rounded-sm font-semibold">
        Book Now
      </button>
    </div>
  );
}

export default OfferCarosalCard;
