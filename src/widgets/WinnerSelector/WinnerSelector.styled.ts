import styled from 'styled-components';
import arrowPNG from './assets/arrow.png';

export const Wrapper = styled.div`
  overflow: hidden;
  height: 90px;
  display: flex;
  margin-bottom: 20px;
  position: relative;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: var(--shadow-main);

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: -5px;
    margin: auto;
    background-image: url(${arrowPNG});
    width: 209px;
    height: 24px;
    z-index: 3;
  }

  &:after {
    content: '';
    position: absolute;
    left: 1px;
    right: 0;
    width: 3px;
    height: 80px;
    margin: auto;
    display: block;
    z-index: 2;
    background: linear-gradient(45deg, #e09823, rgba(247, 226, 70, 0.36));
  }
`;

export const ContentWrapper = styled.div`
  margin: 0;
  display: flex;
  width: 100%;
  animation: horizontalMoving 12s cubic-bezier(0, 0, 0, 1) 0ms forwards;

  @keyframes horizontalMoving {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-900px);
    }
  }
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
