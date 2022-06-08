import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { IRepo } from '../../../models/IRepo';
import { toString } from '../../../utils/utils';

const fetchLanguages = async (repoList: IRepo[]): Promise<IRepo[]> => {
  const newRepoList: IRepo[] = [];

  for (const repo of repoList) {
    const responseLanguages = await axios.get<any>(repo.languages_url);
    if (responseLanguages.status === 200) {
      const languages = toString(responseLanguages.data);
      newRepoList.push({ ...repo, languages });
    } else {
      newRepoList.push({ ...repo });
    }
  }

  return Promise.resolve(newRepoList);
};

export const fetchRepos = createAsyncThunk(
  'repos/fetch_repos',
  async (reposUrl: string, thunkAPI) => {
    try {
      const response = await axios.get<IRepo[]>(reposUrl);

      if (response.status === 200) {
        return await fetchLanguages(response.data);
      }

      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список репозиториев пользователя',
      );
    } catch (e) {
      console.log(e);
      return thunkAPI.rejectWithValue(
        'Не удалось загрузить список репозиториев пользователя',
      );
    }
  },
);
