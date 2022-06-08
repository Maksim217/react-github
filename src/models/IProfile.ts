import { IRepo } from './IRepo';

export interface IProfile {
  id: number;
  avatar_url: string;
  login: string;
  repos_url: string;
  created_at: string;
  html_url: string;
  following_url: string;
  repos_list?: IRepo[];
  following_list?: IProfile[];
  is_member_team: boolean;
}
