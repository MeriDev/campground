import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import campServices from './campServices';

const initialState = {
  campgrounds: [],
  campground: {},
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

export const createCamp = createAsyncThunk(
  'campgrounds/create',
  async (campData, thunkAPI) => {
    try {
      return await campServices.createCampground(campData);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCamps = createAsyncThunk(
  'campgrounds/get',
  async (_, thunkAPI) => {
    try {
      return await campServices.getCampgrounds();
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getCamp = createAsyncThunk(
  'campground/get',
  async (campId, thunkAPI) => {
    try {
      return await campServices.getCampground(campId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const deleteCamp = createAsyncThunk(
  'campgrounds/delete',
  async (campId, thunkAPI) => {
    try {
      return await campServices.deleteCampground(campId);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const editCamp = createAsyncThunk(
  'camgrounds/edit',
  async ({ id, newCamp }, thunkAPI) => {
    try {
      return await campServices.editCampground(id, newCamp);
    } catch (error) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const campgroundSlice = createSlice({
  name: 'campground',
  initialState,
  reducers: {
    reset: state => initialState,
  },
  extraReducers: builder => {
    builder
      .addCase(createCamp.pending, state => {
        state.isLoading = true;
      })
      .addCase(createCamp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds.push(action.payload);
      })
      .addCase(createCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCamps.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamps.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds = action.payload;
      })
      .addCase(getCamps.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(getCamp.pending, state => {
        state.isLoading = true;
      })
      .addCase(getCamp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campground = action.payload;
      })
      .addCase(getCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(deleteCamp.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteCamp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds = state.campgrounds.filter(
          camp => camp._id !== action.payload.id
        );
      })
      .addCase(deleteCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      })
      .addCase(editCamp.pending, state => {
        state.isLoading = true;
      })
      .addCase(editCamp.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.campgrounds = state.campgrounds.map(camp => {
          if (camp._id === action.payload._id) {
            return {
              ...camp,
              text: action.payload.text,
            };
          }
          return camp;
        });
      })

      .addCase(editCamp.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = campgroundSlice.actions;
export default campgroundSlice.reducer;
