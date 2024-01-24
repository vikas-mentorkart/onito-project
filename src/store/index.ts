// store.ts
import { configureStore } from "@reduxjs/toolkit";
import formReducer from "./reducer"
const store = configureStore({
  reducer: {
    formReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
