import { memo } from 'react';
import { Icon, IconNames } from 'components';
import { AmountWrapper, UserItemLogo, UserItemStyled } from './UserItem.styled';
import { IUserItemProps } from './types';
import { getUserItemLogo } from './helpers';

export const UserItem = memo(({ betAmount }: IUserItemProps) => {
  return (
    <UserItemStyled>
      <UserItemLogo
        src={getUserItemLogo(betAmount)}
        alt={`bet-amount-logo-${betAmount}`}
      />
      <AmountWrapper>
        {betAmount}
        <Icon name={IconNames.Coins} />
      </AmountWrapper>
    </UserItemStyled>
  );
});
