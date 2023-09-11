import styled from 'styled-components';

export const UserItemStyled = styled.div`
  width: 98px;
  height: 98px;
  position: relative;
  border-radius: 10px;
  background-color: var(--color-gray-20);
  margin-right: 15px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  justify-content: center;
  flex-direction: column;
`;

export const UserItemLogo = styled.img`
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: drop-shadow(8px 8px 20px rgba(0, 0, 0, 0.25));
`;

export const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  color: var(--color-orange-primary);
  font-weight: 700;
  margin-top: 5px;
  color: #f3a243;
  font-size: 16px;

  & > svg {
    height: 15px;
  }
`;
