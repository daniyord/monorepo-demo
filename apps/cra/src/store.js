import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@dy/my_common/counterSlice";

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
