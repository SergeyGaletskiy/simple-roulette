import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { ColorsPallete, GameRound, IUser } from 'types/common';
import { mockedUsers } from 'mock/users';
import {
  BetsPrivateFields,
  BetsState,
  IApiUserBet,
  IUserBet,
  IUserWinShare,
  TotalBetsSumMapType,
  UsersMapType,
} from './types';
import { BETTING_TIME, DRAWING_TIME } from './constants';
import { getUserDataMap } from './helpers';

const usersDataMap: UsersMapType = getUserDataMap(mockedUsers);

class BetsStore implements BetsState {
  private _roundState: GameRound = GameRound.RoundStarted;
  private _bets: IApiUserBet[] = [];
  private _totalBets: number = 0;
  private _userTotalBetsSumMap: TotalBetsSumMapType = {}; // id - total bets
  private _usersTickets: IUser[] = [];

  constructor() {
    makeObservable<BetsStore, BetsPrivateFields>(this, {
      _bets: observable,
      _roundState: observable,
      _totalBets: observable,
      _userTotalBetsSumMap: observable,
      _usersTickets: observable,
      resetStore: action,
      usersWinShare: computed,
      totalBets: computed,
    });
  }

  get betsData(): IUserBet[] {
    return this._bets.map((betData) => ({
      ...betData,
      winShare: this._userTotalBetsSumMap[betData.id] / this._totalBets,
    }));
  }

  get totalBets() {
    return this._totalBets;
  }

  get roundState() {
    return this._roundState;
  }

  get usersWinShare(): IUserWinShare[] {
    const colors = Object.values(ColorsPallete);

    return Object.entries(this._userTotalBetsSumMap)
      .map(([userId, totalBet]) => ({
        id: userId,
        winShare: (totalBet / this._totalBets) * 100,
        color: colors[Number(userId) - 1],
        ...usersDataMap[userId],
      }))
      .toSorted((a, b) => b.winShare - a.winShare);
  }

  get usersTickets() {
    // shuffle tickets
    return this._usersTickets.toSorted((a, b) => 0.5 - Math.random());
  }

  updateBetsData = (newBet: IApiUserBet) => {
    runInAction(() => {
      this._bets = [newBet, ...this._bets];
      this._totalBets = this._totalBets + newBet.bet;
      this._userTotalBetsSumMap[newBet.id] =
        (this._userTotalBetsSumMap[newBet.id] || 0) + newBet.bet;
    });
  };

  public startRound = () => {
    runInAction(() => {
      this._roundState = GameRound.Betting;
    });
    this.initBetsServer();
  };

  resetStore = () => {
    this._roundState = GameRound.RoundStarted;
    this._bets = [];
    this._totalBets = 0;
    this._userTotalBetsSumMap = {};
  };

  // fake API
  initBetsServer = () => {
    const startTime = Date.now();

    const startBetting = () => {
      const colors = Object.values(ColorsPallete);

      const bettingInterval = setInterval(() => {
        // get random user
        const randomIndex = Math.floor(Math.random() * mockedUsers.length);
        const randomUser = mockedUsers[randomIndex];

        const newBetAmount = Math.ceil(Math.random() * 100);
        const currentTimestamp = Date.now();

        const totalTickets = this._totalBets * 100;

        const newBetData: IApiUserBet = {
          ...randomUser,
          betId: currentTimestamp,
          bet: newBetAmount,
          tickets: {
            start: totalTickets + 1,
            end: totalTickets + newBetAmount * 100,
          },
          color: colors[randomIndex],
        };

        this.updateBetsData(newBetData);

        if (currentTimestamp - startTime >= BETTING_TIME) {
          clearInterval(bettingInterval);
          this.startDrawing();
        }
      }, 500);
    };

    startBetting();
  };

  startDrawing = () => {
    const tickets: IUser[] = [];

    for (const key in this._userTotalBetsSumMap) {
      if (this._userTotalBetsSumMap.hasOwnProperty(key)) {
        const value = this._userTotalBetsSumMap[key];
        // generate tickets array
        for (let i = 0; i < value / 10; i++) {
          tickets.push({
            id: key,
            ...usersDataMap[key],
          });
        }
      }
    }

    runInAction(() => {
      this._roundState = GameRound.Drawing;
      this._usersTickets = tickets;
    });

    setTimeout(() => {
      this.showResults();
    }, DRAWING_TIME);
  };

  showResults = () => {
    // TODO add show winner logic
    // runInAction(() => {
    //   this._roundState = GameRound.Results;
    // });
    // setTimeout(() => {
    //   this.resetStore();
    // }, RESULTS_TIME);
  };
}

export const betsStore = new BetsStore();
