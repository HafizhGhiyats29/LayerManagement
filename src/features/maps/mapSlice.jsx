import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];

export const fetchMaps = createAsyncThunk("maps/fetchMaps", async () => {
  const response = await axios.get("http://192.168.6.191:8081/api/maps");
  return response.data;
});

const mapSlice = createSlice({
  name: "maps",
  initialState,
  reducers: {
    addMap: (state, action) => {
      state.push(action.payload);
      console.log(action.payload);
    },
    editMap: (state, action) => {
      const { id } = action.payload;
      const existingMapIndex = state.findIndex((map) => map.id === id);
      if (existingMapIndex !== -1) {
        state[existingMapIndex] = action.payload;
      } else {
        console.log(`Map with ID ${id} not found.`);
      }
    },
    deleteMap: (state, action) => {
      const { id } = action.payload;
      const existingMapIndex = state.findIndex((map) => map.id === id);
      if (existingMapIndex !== -1) {
        state.splice(existingMapIndex, 1);
      } else {
        console.log(`Map with ID ${id} not found.`);
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchMaps.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const { addMap, editMap, deleteMap } = mapSlice.actions;
export default mapSlice.reducer;
