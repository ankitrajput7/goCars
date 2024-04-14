import React from "react";

function OfferCarosalCard({ offerDetail }) {
  const { offerType, posterImg, rate } = offerDetail;

  return (
    <div className="flex flex-col w-full sm:max-w-80 h-full  shadow-2xl mt-4 ">
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
