import { createSlice } from "@reduxjs/toolkit";

interface Cats {
  data: any;
  loading: boolean;
  error: string;
  page?: number;
  limit?: number;
}

const initialState: Cats = {
  data: [],
  loading: false,
  error: "",
  page: 0,
  limit: 10,
};

const catSlice = createSlice({
  name: "cats",
  initialState,
  reducers: {
    getFetchCats: (state) => {
      state.loading = true;
    },
    getFetchCatsSuccess: (state, { payload }) => {
      state.data = payload;
      state.loading = false;
    },
    getFetchCatsFailure: (state, { payload }) => {
      state.error = payload;
      state.loading = false;
    },
    getFetchCatsPage: (state, { payload }) => {
      state.page = payload.page;
      state.limit = payload.limit;
    },
  },
});

export const {
  getFetchCats,
  getFetchCatsSuccess,
  getFetchCatsFailure,
  getFetchCatsPage,
} = catSlice.actions;

export default catSlice.reducer;
