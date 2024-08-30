// src/redux/store.js
import { configureStore } from "@reduxjs/toolkit";
import carouselReducer from "./carauselSlice";
import accordionReducer from "./accordionSlice";

export const store = configureStore({
  reducer: {
    carousel: carouselReducer,
    accordion: accordionReducer,
  },
});
