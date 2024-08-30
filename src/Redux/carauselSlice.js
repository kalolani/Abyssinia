// src/redux/carouselSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currentSlide: 1, // Start at 1 to handle the duplicated first slide for infinite effect
  totalSlides: 6, // Number of unique slides
};

const carouselSlice = createSlice({
  name: "carousel",
  initialState,
  reducers: {
    nextSlide: (state) => {
      state.currentSlide += 1;
    },
    prevSlide: (state) => {
      state.currentSlide -= 1;
    },
    setSlide: (state, action) => {
      state.currentSlide = action.payload;
    },
  },
});

export const { nextSlide, prevSlide, setSlide } = carouselSlice.actions;
export default carouselSlice.reducer;
