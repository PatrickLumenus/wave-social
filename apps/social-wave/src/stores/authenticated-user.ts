import { atom } from 'nanostores';
import type { UserInfo } from './../models';

export const authenticatedUser = atom<UserInfo|null>(null);