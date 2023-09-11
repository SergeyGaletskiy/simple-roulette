import { ColorsPallete, Teams } from 'types/common';

export interface IUserTagsProps {
  winShare: number;
  betAmount: number;
  userColor: ColorsPallete;
  team?: Teams;
}
