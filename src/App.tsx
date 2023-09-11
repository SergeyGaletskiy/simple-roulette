import { useEffect } from 'react';
import { betsStore } from 'core';
import {
  PlayersBetsFeed,
  PlayersWinShare,
  TotalBets,
  WinnerSelector,
} from 'widgets';
import './App.css';

export const App = () => {
  useEffect(() => {
    // start fake server
    betsStore.startRound();
  }, []);

  return (
    <>
      <TotalBets />
      <PlayersWinShare />
      <WinnerSelector />
      <PlayersBetsFeed />
    </>
  );
};
