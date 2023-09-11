import { observer } from 'mobx-react-lite';
import { betsStore } from 'core';
import { GameRound } from 'types/common';
import { ContentWrapper, TicketAvatar, Wrapper } from './WinnerSelector.styled';

export const WinnerSelector = observer(() => {
  const isWinnerSelectorShown = betsStore.roundState === GameRound.Drawing;

  return isWinnerSelectorShown ? (
    <Wrapper>
      <ContentWrapper>
        {betsStore.usersTickets.map(({ avatar, name }) => {
          const shortId = Math.random().toString(36).slice(2);
          return <TicketAvatar key={shortId} src={avatar} alt={name} />;
        })}
      </ContentWrapper>
    </Wrapper>
  ) : null;
});
