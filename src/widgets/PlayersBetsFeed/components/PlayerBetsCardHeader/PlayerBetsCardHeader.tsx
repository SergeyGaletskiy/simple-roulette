import { PlayerBetsCardHeaderStyled } from './PlayerBetsCardHeader.styled';
import { UserInfo } from '../UserInfo';
import { UserTags } from '../UserTags';
import { IBetCardProps } from '../BetCard/types';

export const PlayerBetsCardHeader = ({
  betData: { name, avatar, tickets, bet, team, color, winShare },
}: IBetCardProps) => {
  return (
    <PlayerBetsCardHeaderStyled>
      <UserInfo userName={name} avatar={avatar} tickets={tickets} />
      <UserTags
        winShare={winShare}
        betAmount={bet}
        userColor={color}
        team={team}
      />
    </PlayerBetsCardHeaderStyled>
  );
};
