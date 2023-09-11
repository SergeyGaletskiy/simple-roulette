import { IconNames } from 'components';
import {
  BetAmountTag,
  TeamTag,
  UserTagsStyled,
  WinShareTag,
} from './UserTags.styled';
import { IUserTagsProps } from './types';

export const UserTags = ({
  winShare,
  betAmount,
  team,
  userColor,
}: IUserTagsProps) => {
  return (
    <UserTagsStyled>
      {team && <TeamTag text={team} startIcon={IconNames.Users} />}
      <BetAmountTag text={String(betAmount)} startIcon={IconNames.Coins} />
      <WinShareTag
        $bgColor={userColor}
        text={`${(winShare * 100).toFixed(2)}%`}
      />
    </UserTagsStyled>
  );
};
