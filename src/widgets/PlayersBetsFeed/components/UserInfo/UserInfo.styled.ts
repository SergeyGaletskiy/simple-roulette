import styled from 'styled-components';

export const UserInfoStyled = styled.div`
  display: flex;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

export const UserInfoContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const UserName = styled.div`
  color: var(--color-black-primary);
  font-size: 17px;
  font-weight: 700;
  line-height: 25px;
`;

export const Tickets = styled.div`
  color: var(--color-gray-50);
  font-size: 16px;
  font-family: Circe, 'sans-serif';
`;

export const UserAvatar = styled.img`
  width: 54px;
  height: 54px;
  border-radius: 15px;
  margin-right: 15px;
  object-fit: cover;
`;
