import React, { useEffect, useState } from "react";
// import {
//   IoMdArrowDropleftCircle,
//   IoMdArrowDroprightCircle,
// } from "react-icons/io";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { GoDotFill, GoDot } from "react-icons/go";

function InformationCarosal() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  let promotionPosterImages = [
    "https://c.wallhere.com/photos/7b/70/1500x800_px_Chile_eruption_Lava_Long_Exposure_nature_smoke_Snowy_Peak-1032420.jpg!d",
    "https://www.strivescan.com/wp-content/uploads/2020/08/laptop-1500x800-1.jpg",
    "https://cdn1.epicgames.com/ue/product/Screenshot/gallImgA33-1920x1080-418744c1e5b5b5f8b1e762ee7c9168a8.png?resize=1&w=1920",
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
    let timer = setTimeout(handleNext, 3500);
    return () => clearTimeout(timer);
  }, [currentImgIndex]);

  return (
    <div className="relative m-10">
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
                className="h-40 xs:h-72 xl:h-80  w-full"
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
