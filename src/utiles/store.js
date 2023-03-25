import appSlice from "./appSlice";
import serchSlice from "./serchSlice";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    app: appSlice,
    search: serchSlice,
  },
});

export default store;
