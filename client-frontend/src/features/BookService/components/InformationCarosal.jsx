import React, { useEffect, useState } from "react";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoDotFill, GoDot } from "react-icons/go";
import { offerTypeImagesLinks } from "../utils/constants";

function InformationCarosal({ offerType }) {
  let promotionPosterImages =
    offerTypeImagesLinks[
      `${offerType[0].toLowerCase()}${offerType.slice(1).split(" ").join("")}`
    ];

  const [currentImgIndex, setCurrentImgIndex] = useState(0);
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
    let timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [currentImgIndex]);

  return (
    <div className="relative ">
      <button
        className="absolute top-1/2 left-0 text-5xl"
        onClick={handlePrevious}
      >
        <IoIosArrowBack />
      </button>

      {promotionPosterImages?.map((posterImage, index) => {
        if (currentImgIndex === index) {
          return (
            <div className="static flex" key={index}>
              <img
                className="h-40 xs:h-80  w-full"
                src={posterImage}
                alt="poster_image"
              ></img>

              <div className="absolute flex justify-center left-0 right-0 bottom-4 text-base space-x-1">
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
        className="absolute top-1/2 right-0 text-5xl"
        onClick={handleNext}
      >
        <IoIosArrowForward />
      </button>
    </div>
  );
}

export default InformationCarosal;
