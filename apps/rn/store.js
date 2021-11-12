import {configureStore} from '@reduxjs/toolkit';
import counterReducer from '@dy/common/counterSlice';
// import counterReducer from './counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
