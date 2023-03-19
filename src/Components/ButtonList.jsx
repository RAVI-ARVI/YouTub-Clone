import React from "react";
import Button from "./Button";

const BtnList = [
  "All",
  "Sports",
  "Ravi",
  "Stocks",
  "Music",
  "Movies",
  "Cooking",
  "Sunday",
  "Money",
];

function ButtonList() {
  return (
    <div className="flex">
      {BtnList.map((item, index) => (
        <Button name={item} key={index} />
      ))}
    </div>
  );
}

export default ButtonList;
