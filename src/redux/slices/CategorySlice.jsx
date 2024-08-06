import {createSlice} from "@reduxjs/toolkit";

const CateorySlice = createSlice({
  name: "category",
  initialState: {
    category: "All",
  },
  reducers:{
    setCategory: (state, action) => {
      state.category = action.payload;
    },
  },
});

export const { setCategory } = CateorySlice.actions;
export default CateorySlice.reducer;