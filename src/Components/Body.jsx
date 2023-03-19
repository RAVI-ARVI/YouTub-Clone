import React from "react";
import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideNav from "./SideNav";

function Body() {
  return (
    <div className="flex">
      <SideNav />
      <Outlet />
    </div>
  );
}

export default Body;
