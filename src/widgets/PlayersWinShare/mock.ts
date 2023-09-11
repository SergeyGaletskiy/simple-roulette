import { ColorsPallete } from 'types/common';
import { IUserWinShare } from 'core/bets/types';
import firePNG from './assets/fire.png';

export const customCard: IUserWinShare = {
  id: 'cardId',
  name: 'CardName',
  avatar: firePNG,
  color: ColorsPallete.FireGray,
  winShare: 5,
};
