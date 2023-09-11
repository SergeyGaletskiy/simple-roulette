export enum Teams {
  Green = 'Green',
  Red = 'Red',
  Blue = 'Blue',
  Yellow = 'Yellow',
}

export interface IUser {
  id: string;
  avatar: string;
  name: string;
  team?: Teams;
}

export enum GameRound {
  RoundStarted = 'RoundStarted',
  Betting = 'Betting',
  Drawing = 'Drawing',
  Results = 'Results',
}

export enum ColorsPallete {
  HoneyGold = 'HoneyGold',
  CreamyBeige = 'CreamyBeige',
  BrightLime = 'BrightLime',
  PlumPurple = 'PlumPurple',
  TangerineOrange = 'TangerineOrange',
  PaleStraw = 'PaleStraw',
  DelicatePink = 'DelicatePink',
  SoftAzure = 'SoftAzure',
  Lemonade = 'Lemonade',
  DarkChocolate = 'DarkChocolate',
  PebbleGrey = 'PebbleGrey',
  LavenderPurple = 'LavenderPurple',
  MochaBrown = 'MochaBrown',
  PearlBeige = 'PearlBeige',
  PineGreen = 'PineGreen',
  FireGray = 'FireGray',
}

export const colorsPalleteMap: Record<ColorsPallete, string> = {
  [ColorsPallete.HoneyGold]: '#F0E68C',
  [ColorsPallete.CreamyBeige]: '#FFFACD',
  [ColorsPallete.BrightLime]: '#98FB98',
  [ColorsPallete.PlumPurple]: '#800080',
  [ColorsPallete.TangerineOrange]: '#FFA500',
  [ColorsPallete.PaleStraw]: '#EEDD82',
  [ColorsPallete.DelicatePink]: '#FFB6C1',
  [ColorsPallete.SoftAzure]: '#ADD8E6',
  [ColorsPallete.Lemonade]: '#20B2AA',
  [ColorsPallete.DarkChocolate]: '#5C3317',
  [ColorsPallete.PebbleGrey]: '#D3D3D3',
  [ColorsPallete.LavenderPurple]: '#CCCCFF',
  [ColorsPallete.MochaBrown]: '#A0522D',
  [ColorsPallete.PearlBeige]: '#FFE4B5',
  [ColorsPallete.PineGreen]: '#8FBC8F',
  [ColorsPallete.FireGray]: '#D7DDEC',
};
