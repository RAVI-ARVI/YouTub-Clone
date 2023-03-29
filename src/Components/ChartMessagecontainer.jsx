import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addChartData } from "../utiles/chartSlice";
import { generateRandomName, randomText } from "../utiles/helper";
import ChartMessage from "./ChartMessage";

function ChartMessagecontainer() {
  const dispatch = useDispatch();
  const messageData = useSelector((store) => store.chart.messages);
  console.log(messageData, "this is daata ");
  useEffect(() => {
    const i = setInterval(() => {
      dispatch(
        addChartData({
          name: generateRandomName(),
          message: randomText(10),
        })
      );
    }, 300);

    return () => {
      clearInterval(i);
    };
  }, []);
  return (
    <div className="p-2 border  h-[600px] bg-slate-100 rounded-lg border-black ml-2 overflow-y-scroll flex flex-col-reverse">
      {messageData?.map((item, i) => (
        <ChartMessage key={i} name={item.name} message={item.message} />
      ))}
    </div>
  );
}

export default ChartMessagecontainer;
