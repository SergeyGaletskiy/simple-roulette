import { FunctionComponent, SVGProps } from 'react';
import * as Icons from 'assets/icons';
import { IIconProps, IconNames } from './types';

const iconsMap: Record<
  IconNames,
  FunctionComponent<SVGProps<SVGSVGElement>>
> = Icons;

export const Icon = ({ name, className }: IIconProps) => {
  const IconComponent = iconsMap[name];

  return <IconComponent className={className} />;
};
