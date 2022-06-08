import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchRepos } from '../../reducers/repos/ActionCreators';
import { IRepo } from '../../../models/IRepo';

interface ReposState {
  repos: IRepo[];
  isLoading: boolean;
  requested: boolean;
  error: string;
}

const initialState: ReposState = {
  repos: [],
  isLoading: false,
  requested: false,
  error: '',
};

export const reposSlice = createSlice({
  name: 'repos',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchRepos.fulfilled.type]: (state, action: PayloadAction<IRepo[]>) => {
      state.isLoading = false;
      state.requested = true;
      state.error = '';
      state.repos = action.payload;
    },
    [fetchRepos.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchRepos.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default reposSlice.reducer;
