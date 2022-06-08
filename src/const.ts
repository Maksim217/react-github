export const CLIENT_ID = 'Iv1.472f6751dcb1d010';
export const CLIENT_SECRET = 'e09241b48515ad49d8a12e38360a109ce31ec024';
export const PROFILE_URL = 'https://api.github.com/users/Maksim217';
export const USERS_URL = 'https://api.github.com/users?since=50000000';
export const SHOWING_REPOS_COUNT_BY_BUTTON = 2;
export const SHOWING_FOLLOWING_COUNT_BY_BUTTON = 3;

export enum ResponseStatus {
  Fulfilled = 'fulfilled',
  Pending = 'pending',
  Rejected = 'rejected',
}

export enum Reducer {
  Profile = 'PROFILE',
  Repos = 'REPOS',
  Following = 'FOLLOWING',
  Team = 'TEAM',
}

export enum Storage {
  Team = 'team',
}

export enum Path {
  Profile = '/',
  Team = '/team',
}

export enum PageTitle {
  Profile = 'Мой профиль',
  Team = 'Моя команда',
}

export type Sorting = '' | 'ASC' | 'DESC';

export type CopyStatus = 'inactive' | 'copied' | 'failed';
