import React from "react";
import MainContainer from "./MainContainer";
import SideNav from "./SideNav";

function Body() {
  return (
    <div className="flex">
      <SideNav />
      <MainContainer />
    </div>
  );
}

export default Body;
