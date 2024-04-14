import React, { useEffect, useState } from "react";
import poster_goCars from "../../../assets/images/poster-goCars-1.png";
import {
  IoMdArrowDropleftCircle,
  IoMdArrowDroprightCircle,
} from "react-icons/io";
import { GoDotFill, GoDot } from "react-icons/go";

function PromotionCarosal() {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  let promotionPosterImages = [
    poster_goCars,
    "https://wallpaperboat.com/wp-content/uploads/2019/06/8-bit-24.jpg",
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
