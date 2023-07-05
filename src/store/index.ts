import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import catSlice from "./feature/catSlice";
import catSaga from "./saga";

const saga = createSagaMiddleware();
export const store = configureStore({
  reducer: {
    cats: catSlice,
  },
  middleware: [saga],
});

saga.run(catSaga);
