import React from "react";
import { Outlet } from "react-router-dom";

function Main() {
  return (
    <div className="max-w-[1500px]">
      <Outlet />
    </div>
  );
}

export default Main;
