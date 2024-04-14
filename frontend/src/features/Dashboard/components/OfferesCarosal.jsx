import React from "react";
import OfferCarosalCard from "./OfferCarosalCard.jsx";
import car_washing_img from "../../../assets/images/car-washing.jpg";
import car_service_img from "../../../assets/images/car-service-img.jpg";
import car_service_img2 from "../../../assets/images/car-service-img2.jpg";

function OfferesCarosal() {
  const servicesImages = [
    {
      offerType: "Full Car Service",
      posterImg: car_service_img2,
      rate: 2999,
    },
    {
      offerType: "Car Washing",
      posterImg: car_washing_img,
      rate: 500,
    },
    {
      offerType: "Car Repair Service",
      posterImg: car_service_img,
      rate: 1000,
    },
  ];

  return (
    <div className="py-4 px-4 sm:px-8">
      <h1 className="text-2xl font-semibold">Our Most Popular Services</h1>
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {servicesImages?.map((offerDetail, index) => {
          return <OfferCarosalCard offerDetail={offerDetail} key={index} />;
        })}
      </div>
    </div>
  );
}

export default OfferesCarosal;
