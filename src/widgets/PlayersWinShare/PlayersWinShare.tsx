import { observer } from 'mobx-react-lite';
import { betsStore } from 'core';
import {
  PlayersWinShareStyled,
  TeamName,
  TicketAvatar,
  UserCardWrapper,
  WinShare,
} from './PlayersWinShare.styled';
import { customCard } from './mock';

export const PlayersWinShare = observer(() => {
  return (
    <PlayersWinShareStyled>
      {[...betsStore.usersWinShare, customCard].map(
        ({ id, avatar, winShare, color, team, name }) => (
          <UserCardWrapper key={id}>
            {team && <TeamName>{team}</TeamName>}
            <TicketAvatar src={avatar} alt={name} />
            <WinShare $bgColor={color}>${winShare.toFixed(2)}%</WinShare>
          </UserCardWrapper>
        )
      )}
    </PlayersWinShareStyled>
  );
});
