import { observer } from 'mobx-react-lite';
import { betsStore } from 'core';
import { Icon, IconNames } from 'components';
import { TotalBetsStyled } from './TotalBets.styled';

export const TotalBets = observer(() => {
  return (
    <TotalBetsStyled>
      <span>Total Bets:</span>
      <Icon name={IconNames.Coins} />
      {betsStore.totalBets}
    </TotalBetsStyled>
  );
});
