import styled, { css } from 'styled-components';
import { ColorsPallete, colorsPalleteMap } from 'types/common';

export const PlayersWinShareStyled = styled.div`
  background-color: var(--color-white);
  box-shadow: var(--shadow-main);
  border-radius: 15px;
  margin-bottom: 20px;
  padding: 10px;
  display: flex;
  overflow-x: hidden;
`;

export const UserCardWrapper = styled.div`
  position: relative;
`;

export const TicketAvatar = styled.img`
  border-radius: 12px;
  width: 78px;
  height: 78px;
  margin-right: 5px;
  object-fit: cover;
  border: 3px solid transparent;
  background-color: #f4f5f9;
`;

const labelsStyles = css`
  position: absolute;
  color: var(--color-white);
  border-radius: 6px;
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  z-index: 2;
`;

export const TeamName = styled.div`
  ${labelsStyles}
  height: 20px;
  left: 2px;
  right: 7px;
  top: -10px;
  background-color: #f69a0cd9;
  padding: 2px 5px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  text-align: center;
`;

export const WinShare = styled.div<{ $bgColor: ColorsPallete }>`
  ${labelsStyles}
  background-color: ${({ $bgColor }) => colorsPalleteMap[$bgColor]};
  height: 24px;
  bottom: 15px;
  left: 5px;
  right: 10px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  text-shadow: 0 0 16px rgba(0, 0, 0, 0.85);
`;
