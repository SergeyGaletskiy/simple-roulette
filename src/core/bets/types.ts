import { ColorsPallete, GameRound, IUser } from 'types/common';

export interface BetsState {
  betsData: IUserBet[];
  totalBets: number;
  roundState: GameRound;
  usersTickets: IUser[];
  usersWinShare: IUserWinShare[];
  updateBetsData: (newBet: IApiUserBet) => void;
  startRound: () => void;
  resetStore: () => void;

  // "fake server" methods
  initBetsServer: () => void;
  startDrawing: () => void;
  showResults: () => void;
}

export type BetsPrivateFields =
  | '_bets'
  | '_totalBets'
  | '_roundState'
  | '_userTotalBetsSumMap'
  | '_usersTickets';

export type TicketsType = {
  start: number;
  end: number;
};

export interface IApiUserBet extends IUser {
  bet: number;
  betId: number;
  tickets: TicketsType;
  color: ColorsPallete;
}

export interface IUserBet extends IApiUserBet {
  winShare: number;
}

export type TotalBetsSumMapType = Record<string, number>;
export type UsersMapType = Record<string, Omit<IUser, 'id'>>;

export interface IUserWinShare extends IUser {
  color: ColorsPallete;
  winShare: number;
}
