import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChartData } from "../utiles/chartSlice";
import { generateRandomName, randomText } from "../utiles/helper";
import ChartMessage from "./ChartMessage";

function ChartMessagecontainer() {
  const dispatch = useDispatch();
  const messageData = useSelector((store) => store.chart.messages);
  const [liveMessage, setLiveMessage] = useState("");

  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChartData({
          name: generateRandomName(),
          message: randomText(10),
        })
      );
    }, 1500);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <>
      <div className="p-2 border  h-[600px] bg-slate-100 rounded-lg border-black ml-2 overflow-y-scroll flex flex-col-reverse">
        {messageData?.map((item, i) => (
          <ChartMessage key={i} name={item.name} message={item.message} />
        ))}
      </div>
      <form
        className="w-full p-2 ml-2 border border-black"
        onSubmit={(e) => {
          e.preventDefault();

          dispatch(
            addChartData({
              name: "Ravi",
              message: liveMessage,
            })
          );
          setLiveMessage("");
        }}
      >
        <input
          className="px-2 w-96"
          type="text"
          value={liveMessage}
          onChange={(e) => {
            setLiveMessage(e.target.value);
          }}
        />
        <button className="px-2 mx-2 bg-green-100">Send</button>
      </form>
    </>
  );
}

export default ChartMessagecontainer;
