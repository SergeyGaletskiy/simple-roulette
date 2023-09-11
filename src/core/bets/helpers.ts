import { IUser } from 'types/common';
import { UsersMapType } from './types';

export const getUserDataMap = (users: IUser[]): UsersMapType => {
  return users.reduce<UsersMapType>((acc, { id, ...rest }) => {
    return {
      ...acc,
      [id]: {
        ...rest,
      },
    };
  }, {});
};
