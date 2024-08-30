// src/Redux/accordionSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openItem: null, // Initially, no item is open
};

const accordionSlice = createSlice({
  name: "accordion",
  initialState,
  reducers: {
    toggleItem: (state, action) => {
      // Store only a serializable value
      state.openItem =
        state.openItem === action.payload ? null : action.payload;
    },
  },
});

export const { toggleItem } = accordionSlice.actions;
export default accordionSlice.reducer;
