import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@dy/common/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
