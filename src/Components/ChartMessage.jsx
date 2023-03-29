import React, { useEffect } from "react";

function ChartMessage({ name, message }) {
  return (
    <div className="flex items-center my-2 p-1">
      <img
        className="h-8"
        alt="user"
        src="https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
      />
      <span className="font-bold mx-3">{name}</span>
      <span>{message} </span>
    </div>
  );
}

export default ChartMessage;
