import { PlayerBetsCardStyled } from './BetCard.styled';
import { IBetCardProps } from './types';
import { PlayerBetsCardHeader } from '../PlayerBetsCardHeader';
import { UserItem } from '../UserItem';

export const BetCard = ({ betData }: IBetCardProps) => {
  return (
    <PlayerBetsCardStyled>
      <PlayerBetsCardHeader betData={betData} />
      <UserItem betAmount={betData.bet} />
    </PlayerBetsCardStyled>
  );
};
