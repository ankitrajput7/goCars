import React, { useState } from "react";
import { createUploadLogoLink, uploadLogo } from "../utils/uploadlogo.axios";

function UploadLogo() {
  const [addLogo, setAddLogo] = useState(null);
  const [addPoster1, setAddPoster1] = useState(null);
  const [addPoster2, setAddPoster2] = useState(null);
  const [addPoster3, setAddPoster3] = useState(null);

  const handleAddLogo = (e) => {
    e.preventDefault();
    if (!addLogo) {
      console.error("No file selected");
      return;
    }

    (async function () {
      try {
        const { url } = await createUploadLogoLink({
          fileName: "logo",
          contentType: addLogo.type,
        });
        const result = await uploadLogo(url, addLogo);
        console.log(url, result, "logo uploaded successfully");
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const handleAddPromotionPoster1 = (e) => {
    e.preventDefault();
    if (!addPoster1) {
      console.error("No file selected");
      return;
    }

    (async function () {
      try {
        const { url } = await createUploadLogoLink({
          fileName: "promotion-poster-1",
          contentType: addPoster1.type,
        });
        const result = await uploadLogo(url, addPoster1);

        console.log(url, result, "promotion-poster-1 uploaded successfully");
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const handleAddPromotionPoster2 = (e) => {
    e.preventDefault();
    if (!addPoster2) {
      console.error("No file selected");
      return;
    }

    (async function () {
      try {
        const { url } = await createUploadLogoLink({
          fileName: "promotion-poster-2",
          contentType: addPoster2.type,
        });
        const result = await uploadLogo(url, addPoster2);

        console.log(url, result, "promotion-poster-2 uploaded successfully");
      } catch (err) {
        console.log(err);
      }
    })();
  };

  const handleAddPromotionPoster3 = (e) => {
    e.preventDefault();
    if (!addPoster3) {
      console.error("No file selected");
      return;
    }

    (async function () {
      try {
        const { url } = await createUploadLogoLink({
          fileName: "promotion-poster-3",
          contentType: addPoster3.type,
        });
        const result = await uploadLogo(url, addPoster3);

        console.log(url, result, "promotion-poster-3 uploaded successfully");
      } catch (err) {
        console.log(err);
      }
    })();
  };

  return (
    <div className="m-4">
      <table className=" text-thin table-auto">
        <thead>
          <tr className="border border-black/100">
            <th className="px-2 py-1 font-medium text-base">Add Logo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2">
              <input
                name="Choose Logo"
                onChange={(e) => setAddLogo(e.target.files[0])}
                type="file"
              ></input>
            </td>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2 py-2 ">
              <input
                className="hover:cursor-pointer font-semibold"
                value="Add Logo"
                onClick={handleAddLogo}
                type="button"
              ></input>
            </td>
          </tr>

          <tr>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2">
              <input
                name="Choose Promotion Poster"
                onChange={(e) => setAddPoster1(e.target.files[0])}
                type="file"
              ></input>
            </td>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2 py-2">
              <input
                className="hover:cursor-pointer font-semibold"
                value="Add Promotion First Poster"
                onClick={handleAddPromotionPoster1}
                type="button"
              ></input>
            </td>
          </tr>

          <tr>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2">
              <input
                name="Choose Promotion Poster"
                onChange={(e) => setAddPoster2(e.target.files[0])}
                type="file"
              ></input>
            </td>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2 py-2">
              <input
                className="hover:cursor-pointer font-semibold"
                value="Add Promotion Second Poster"
                onClick={handleAddPromotionPoster2}
                type="button"
              ></input>
            </td>
          </tr>

          <tr>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2">
              <input
                name="Choose Promotion Third Poster"
                onChange={(e) => setAddPoster3(e.target.files[0])}
                type="file"
              ></input>
            </td>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2 py-2">
              <input
                className="hover:cursor-pointer font-bold"
                value="Add Promotion Poster"
                onClick={handleAddPromotionPoster3}
                type="button"
              ></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UploadLogo;
