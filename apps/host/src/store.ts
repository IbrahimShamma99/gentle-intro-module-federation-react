import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { combineReducers } from "redux";

const federatedSlices = {
  layout: await import("app1/layout-slice").then(
    (module) => module.default.reducer
  ),
};

const initStore = async () => {
  const Store = configureStore({
    reducer: combineReducers({
      ...federatedSlices,
    }),
  });
  return Store;
};

// export type RootState = ReturnType<typeof Store.getState>;
// export type AppDispatch = typeof Store.dispatch;
// export const useAppDispatch = () => useDispatch<AppDispatch>();

export default initStore;
