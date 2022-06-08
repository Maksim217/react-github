import { CLIENT_ID, CLIENT_SECRET } from '../const';
import { IProfile } from '../models/IProfile';

export const parseUrl = (url: string): string => {
  const regex = /({([^>]+)})/gi;
  return url.replace(regex, '');
};

export const withCreds = (url: string): string => {
  return `${url}client_id=${CLIENT_ID}&client_secret=${CLIENT_SECRET}`;
};

export const getResponseStatus = (response: string) => {
  const arrResult = response.split('/');
  return arrResult[arrResult.length - 1];
};

export const sortByFieldASC =
  (fieldName: string) => (current: any, next: any) =>
    current[fieldName].toLowerCase() > next[fieldName].toLowerCase() ? 1 : -1;

export const sortByFieldDESC =
  (fieldName: string) => (current: any, next: any) =>
    current[fieldName].toLowerCase() < next[fieldName].toLowerCase() ? 1 : -1;

export const checkSubstring = (str: string, substr: string): boolean => {
  if (str.toLowerCase().indexOf(substr) + 1) {
    return true;
  }
  return false;
};

export const parseDate = (date: string): string => {
  return new Date(date).toLocaleDateString();
};

export const toString = (obj: any): string => {
  const languages = Object.keys(obj);
  if (languages.length) {
    return languages.join(', ');
  }
  return '';
};

export const initProfile = (): IProfile => ({
  id: 1,
  avatar_url:
    'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png',
  login: '',
  repos_url: '',
  created_at: '',
  html_url: '',
  following_url: '',
  is_member_team: false,
});
