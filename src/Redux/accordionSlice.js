// src/Redux/accordionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const accordionSlice = createSlice({
  name: "accordion",
  initialState: {
    openItem: 1, // Open the first item by default (assuming '1' represents the first item's identifier)
  },
  reducers: {
    toggleItem: (state, action) => {
      // Toggle logic: close if the same item is clicked, otherwise open the new item
      state.openItem =
        state.openItem === action.payload ? null : action.payload;
    },
  },
});

export const { toggleItem } = accordionSlice.actions;
export default accordionSlice.reducer;
