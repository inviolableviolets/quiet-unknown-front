import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Sighting } from "../models/sighting";
import { SightingRepository } from "../services/sighting.repository";
import { ApiResponse, GetSightingPayload } from "../types/api.response";

export type SightingsState = {
  getSightingsState: "loading" | "loaded" | null;
  sightings: Sighting[];
  count: number;
  next: string | null;
  previous: string | null;
};

const initialState: SightingsState = {
  getSightingsState: null,
  sightings: [] as Sighting[],
  count: 0,
  next: null,
  previous: null,
};

export const getSightingAsync = createAsyncThunk<
  ApiResponse,
  GetSightingPayload
>("sightings/get", async ({ repo, url, region }) => {
  const response = await repo.getAll(url, region);
  return response;
});

export const createSightingAsync = createAsyncThunk<
  Sighting,
  { repo: SightingRepository; sighting: FormData }
>("sightings/create", async ({ repo, sighting }) => {
  return await repo.create(sighting);
});

export const editSightingAsync = createAsyncThunk<
  Sighting,
  { repo: SightingRepository; data: Partial<Sighting> }
>("sightings/update", async ({ repo, data }) => {
  return await repo.update(data);
});

export const deleteSightingAsync = createAsyncThunk<
  string,
  { repo: SightingRepository; id: Sighting["id"] }
>("sighting/delete", async ({ id, repo }) => {
  const response = await repo.delete(id);
  return response ? id : "";
});

const sightingsSlice = createSlice({
  name: "sightings",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getSightingAsync.fulfilled, (state, { payload }) => ({
      ...state,
      sightings: payload.items,
      count: payload.count,
      next: payload.next,
      previous: payload.previous,
      getSightingsState: "loaded",
    }));

    builder.addCase(getSightingAsync.pending, (state) => ({
      ...state,
      getSightingsState: "loading",
    }));
    builder.addCase(createSightingAsync.fulfilled, (state, { payload }) => ({
      ...state,
      sightings: [...state.sightings, payload],
    }));
    builder.addCase(editSightingAsync.fulfilled, (state, { payload }) => ({
      ...state,
      sightings: [payload],
    }));
    builder.addCase(deleteSightingAsync.fulfilled, (state, { payload }) => {
      return {
        ...state,
        sightings: state.sightings.filter(
          (sighting) => sighting.id !== payload
        ),
      };
    });
  },
});

export default sightingsSlice.reducer;
export const ac = sightingsSlice.actions;
