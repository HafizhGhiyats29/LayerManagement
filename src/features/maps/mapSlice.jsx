import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMaps = createAsyncThunk("maps/fetchMaps", async () => {
  const response = await axios.get("http://192.168.6.191:8080/api/basemaps/?limit=10");
  return response.data;
});

const mapSlice = createSlice({
  name: "maps",
  initialState: [],
  reducers: {
    addMap: (state, action) => {
      state.push(action.payload);
    },
    editMap: (state, action) => {
      const {id,name,title,file } = action.payload;
      const existingMapIndex = state.findIndex((basemap) => basemap.id === id);
      if (existingMapIndex !== -1) {
        existingMapIndex.name = name;
        existingMapIndex.title = title;
        existingMapIndex.file = file;
      }
    },
    deleteMap: (state, action) => {
      const existingMapIndex = state.findIndex((basemap) => basemap.id === action.payload);
      if (existingMapIndex !== -1) {
        state.splice(state.findIndex(existingMapIndex), 1);
      }
    },
   
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMaps.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchMaps.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.maps = action.payload;
      })
      .addCase(fetchMaps.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },

});

export const { addMap, editMap, deleteMap } = mapSlice.actions;
export default mapSlice.reducer;
