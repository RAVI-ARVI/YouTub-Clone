import appSlice from "./appSlice";
import chartSlice from "./chartSlice";
import serchSlice from "./serchSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
    search: serchSlice,
    chart: chartSlice,
  },
});

export default store;
