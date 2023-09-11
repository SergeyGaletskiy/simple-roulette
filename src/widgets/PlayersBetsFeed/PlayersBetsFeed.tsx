import { betsStore } from 'core';
import { PlayersBetsFeedStyled } from './PlayersBetsFeed.styled';
import { BetCard } from './components';
import { observer } from 'mobx-react-lite';

export const PlayersBetsFeed = observer(() => {
  return (
    <PlayersBetsFeedStyled>
      {betsStore.betsData.map((betCardData) => (
        <BetCard key={betCardData.betId} betData={betCardData} />
      ))}
    </PlayersBetsFeedStyled>
  );
});
