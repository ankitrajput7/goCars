import React, { useState } from "react";

function UploadLogo() {
  const [addLogo, setAddLogo] = useState({ logo: "" });

  const handleInput = (e) => {
    setAddLogo(() => {
      return {
        logo: e.target.files[0],
      };
    });
  };

  const handleAdd = (e) => {
    console.log(addLogo);
  };

  return (
    <div className="m-4">
      <table className=" text-thin table-auto">
        <thead>
          <tr className="border border-black/100">
            <th className=" px-2 py-1 font-medium text-base">Add Logo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2">
              <input
                name="Choose Logo"
                onChange={handleInput}
                type="file"
              ></input>
            </td>
            <td className="border border-black/100 text-xs hover:text-blue-600 hover:bg-gray-100 px-2 py-2">
              <input value="Add" onClick={handleAdd} type="button"></input>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default UploadLogo;
