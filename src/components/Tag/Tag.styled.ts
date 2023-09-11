import styled from 'styled-components';

export const TagStyled = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 700;
  height: 35px;
  padding: 0 20px;
  font-size: 16px;
  color: var(--color-white);
  background-color: var(--color-black-primary);

  & > svg {
    margin-right: 5px;
  }
`;
