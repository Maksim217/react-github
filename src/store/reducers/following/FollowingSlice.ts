import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchFollowing } from '../../reducers/following/ActionCreators';
import { IProfile } from '../../../models/IProfile';

interface FollowingState {
  following: IProfile[];
  isLoading: boolean;
  requested: boolean;
  error: string;
}

const initialState: FollowingState = {
  following: [],
  isLoading: false,
  requested: false,
  error: '',
};

export const followingSlice = createSlice({
  name: 'following',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchFollowing.fulfilled.type]: (
      state,
      action: PayloadAction<IProfile[]>,
    ) => {
      state.isLoading = false;
      state.requested = true;
      state.error = '';
      state.following = action.payload;
    },
    [fetchFollowing.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchFollowing.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default followingSlice.reducer;
