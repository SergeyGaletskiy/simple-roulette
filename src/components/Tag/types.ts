import { IconNames } from '../Icon/types';

export interface ITag {
  text: string;
  startIcon?: IconNames;
}

export interface ITagProps extends ITag {
  className?: string;
}
