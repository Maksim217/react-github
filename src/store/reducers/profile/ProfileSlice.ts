import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchProfile } from '../../reducers/profile/ActionCreators';
import { IProfile } from '../../../models/IProfile';
import { initProfile } from '../../../utils/utils';

interface ProfileState {
  profile: IProfile;
  isLoading: boolean;
  requested: boolean;
  error: string;
}

const initialState: ProfileState = {
  profile: initProfile(),
  isLoading: false,
  requested: false,
  error: '',
};

export const profileSlice = createSlice({
  name: 'profile',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchProfile.fulfilled.type]: (state, action: PayloadAction<IProfile>) => {
      state.isLoading = false;
      state.requested = true;
      state.error = '';
      state.profile = action.payload;
    },
    [fetchProfile.pending.type]: (state) => {
      state.isLoading = true;
    },
    [fetchProfile.rejected.type]: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export default profileSlice.reducer;
