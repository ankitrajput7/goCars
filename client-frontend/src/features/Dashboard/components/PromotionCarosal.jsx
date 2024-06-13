import React, { useEffect, useState } from "react";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { GoDotFill, GoDot } from "react-icons/go";

function PromotionCarosal() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  let promotionPosterImages = [
    "https://go-cars2.s3.ap-south-1.amazonaws.com/admin-upload/promotion-poster-1",
    "https://go-cars2.s3.ap-south-1.amazonaws.com/admin-upload/promotion-poster-2",
    "https://go-cars2.s3.ap-south-1.amazonaws.com/admin-upload/promotion-poster-3",
  ];

  const handlePrevious = () => {
    currentImgIndex > 0
      ? setCurrentImgIndex(currentImgIndex - 1)
      : setCurrentImgIndex(promotionPosterImages.length - 1);
  };

  const handleNext = () => {
    currentImgIndex < promotionPosterImages.length - 1
      ? setCurrentImgIndex((prev) => prev + 1)
      : setCurrentImgIndex(0);
  };

  useEffect(() => {
    let timer = setTimeout(handleNext, 1500);
    return () => clearTimeout(timer);
  }, [currentImgIndex]);

  return (
    <div className="relative">
      <button
        className="absolute top-1/2 left-0 text-3xl"
        onClick={handlePrevious}
      >
        <IoMdArrowDropleftCircle />
      </button>

      {promotionPosterImages?.map((posterImage, index) => {
        if (currentImgIndex === index) {
          return (
            <div className="static flex" key={index}>
              <img
                className="h-40 xs:h-80 xl:h-96  w-full"
                src={posterImage}
                alt="poster_image"
              ></img>

              <div className="absolute flex justify-center left-0 right-0 bottom-4 text-lg space-x-1">
                {promotionPosterImages?.map((posterImage, index) => (
                  <button key={index} onClick={() => setCurrentImgIndex(index)}>
                    {currentImgIndex === index ? <GoDotFill /> : <GoDot />}
                  </button>
                ))}
              </div>
            </div>
          );
        }
      })}

      <button
        className="absolute top-1/2 right-0 text-3xl"
        onClick={handleNext}
      >
        <IoMdArrowDroprightCircle />
      </button>
    </div>
  );
}

export default PromotionCarosal;
