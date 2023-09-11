import styled from 'styled-components';
import { Tag } from 'components';
import { ColorsPallete, colorsPalleteMap } from 'types/common';

export const UserTagsStyled = styled.div`
  display: flex;

  & > div:not(:last-child) {
    margin-right: 10px;
  }
`;

export const TeamTag = styled(Tag)`
  background-color: #f7c43b;
  color: var(--color-white);

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const BetAmountTag = styled(Tag)`
  background-color: #f4f7fc;
  color: var(--color-orange-primary);
`;

export const WinShareTag = styled(Tag)<{ $bgColor: ColorsPallete }>`
  background-color: ${({ $bgColor }) => colorsPalleteMap[$bgColor]};
`;
