import {
  Tickets,
  UserAvatar,
  UserInfoContent,
  UserInfoStyled,
  UserName,
} from './UserInfo.styled';
import { IUserInfoProps } from './types';

export const UserInfo = ({ userName, avatar, tickets }: IUserInfoProps) => {
  const ticketsLabel = `Tickets: #${tickets.start} - #${tickets.end}`;

  return (
    <UserInfoStyled>
      <UserAvatar src={avatar} alt={userName}></UserAvatar>
      <UserInfoContent>
        <UserName>{userName}</UserName>
        <Tickets>{ticketsLabel}</Tickets>
      </UserInfoContent>
    </UserInfoStyled>
  );
};
