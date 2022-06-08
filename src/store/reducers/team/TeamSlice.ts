import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUsers } from '../../reducers/team/ActionCreators';
import { IProfile } from '../../../models/IProfile';
import { IUsers } from '../../../models/IUsers';
import { sortByFieldASC, sortByFieldDESC } from '../../../utils/utils';
import { Sorting } from '../../../const';

interface TeamState {
  team: IProfile[];
  teamSortType: Sorting;
  users: IProfile[];
  requested: boolean;
  isLoading: boolean;
  error: boolean;
}

const initialState: TeamState = {
  team: [],
  teamSortType: '',
  users: [],
  requested: false,
  isLoading: false,
  error: false,
};

const updateUserStatus =
  (id: number, isMemberTeam: boolean = false) =>
  (user: IProfile) => {
    if (user.id === id) {
      user.is_member_team = isMemberTeam;
    }
  };

export const teamSlice = createSlice({
  name: 'team',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<IProfile>) => {
      state.team.push(action.payload);
      state.users.forEach(updateUserStatus(action.payload.id, true));
    },
    setUsers: (state, action: PayloadAction<IProfile[]>) => {
      state.users = action.payload;
    },
    remove: (state, action: PayloadAction<number>) => {
      state.team = [...state.team.filter((user) => user.id !== action.payload)];
      state.users.forEach(updateUserStatus(action.payload));
      if (!state.team.length) {
        state.teamSortType = '';
      }
    },
    sort: (state, action: PayloadAction<Sorting>) => {
      state.teamSortType = action.payload;

      if (action.payload === 'ASC') {
        state.team.sort(sortByFieldASC('login'));
      } else {
        state.team.sort(sortByFieldDESC('login'));
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<IUsers>) => {
        state.isLoading = false;
        state.requested = true;
        state.error = false;
        state.users = action.payload.users;
        state.team = action.payload.team;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      })
      .addCase(fetchUsers.pending, (state) => {
        state.isLoading = true;
      });
  },
});

export default teamSlice.reducer;
