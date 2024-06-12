import React from "react";
import { FaUserAlt } from "react-icons/fa";

function Testimonials() {
  return (
    <div className="flex flex-col p-8 space-y-4 shadow-xl">
      <h1 className="text-xl sm:text-2xl self-center font-bold">
        Testimonials
      </h1>
      <div className="grid xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm">
        <div className="max-w-[500px] space-y-4 bg-gray-300 p-6 rounded-xl shadow-sm">
          <p>
            &quot;className text-xl sm:text-2xl self-center
            font-boldTestimonials className grid grid col 4 text-xl sm:text-2xl
            self-center font-boldTestimonials className grid grid col 4.&quot;
          </p>

          <div className="flex space-x-4">
            <div className="self-center bg-orange-500 rounded-full p-2">
              <FaUserAlt />
            </div>
            <h2 className="text-xl">Ankit Rajput</h2>
          </div>
        </div>

        <div className="max-w-[500px] space-y-4 bg-gray-300 p-6 rounded-xl">
          <p>
            &quot;className text-xl sm:text-2xl self-center
            font-boldTestimonials className grid grid col 4 text-xl sm:text-2xl
            self-center font-boldTestimonials className grid grid col 4.&quot;
          </p>

          <div className="flex space-x-4">
            <div className="self-center bg-orange-500 rounded-full p-2">
              <FaUserAlt />
            </div>
            <h2 className="text-xl">Ankit Rajput</h2>
          </div>
        </div>

        <div className="max-w-[500px] space-y-4 bg-gray-300 p-6 rounded-xl">
          <p>
            &quot;className text-xl sm:text-2xl self-center
            font-boldTestimonials className grid grid col 4 text-xl sm:text-2xl
            self-center font-boldTestimonials className grid grid col 4.&quot;
          </p>

          <div className="flex space-x-4">
            <div className="self-center bg-orange-500 rounded-full p-2">
              <FaUserAlt />
            </div>
            <h2 className="text-xl">Ankit Rajput</h2>
          </div>
        </div>

        <div className="max-w-[500px] space-y-4 bg-gray-300 p-6 rounded-xl">
          <p>
            &quot;className text-xl sm:text-2xl self-center
            font-boldTestimonials className grid grid col 4 text-xl sm:text-2xl
            self-center font-boldTestimonials className grid grid col 4.&quot;
          </p>

          <div className="flex space-x-4">
            <div className="self-center bg-orange-500 rounded-full p-2">
              <FaUserAlt />
            </div>
            <h2 className="text-xl">Ankit Rajput</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
