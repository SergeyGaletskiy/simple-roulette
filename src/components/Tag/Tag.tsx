import { memo } from 'react';
import { TagStyled } from './Tag.styled';
import { ITagProps } from './types';
import { Icon } from '../Icon/Icon';

export const Tag = memo(({ text, startIcon, className }: ITagProps) => {
  return (
    <TagStyled className={className}>
      {startIcon && <Icon name={startIcon} />}
      {text}
    </TagStyled>
  );
});
