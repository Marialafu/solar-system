import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledMenu = styled.ul`
  width: 100%;
  background-color: ${COLORS.primaryColor};
  padding: 2.5rem 1.8125rem 2.5rem 19px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 2;
  top: 6.5938rem;
  gap: 2.5rem;
  translate: ${({ $openMenu }) => ($openMenu ? '0' : '-100%')};
  transition: translate 0.5s;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    transition: none;
    translate: none;
    padding: 0 3.1875rem;
    background-color: transparent;
    justify-content: space-between;

    &::before {
      content: '';
      position: absolute;
      top: 200%;
      left: 0;
      width: 100vw;
      height: 0.0625rem;
      background-color: ${COLORS.white500};
    }
  }
  @media screen and (min-width: 1400px) {
    width: 41.5625rem;
    padding: 0 1rem;
    right: 23%;
    top: 3rem;

    &::before {
      content: '';
      position: absolute;
      top: 280%;
      left: -63%;
      width: 212%;
      height: 0.0625rem;
      background-color: ${COLORS.white500};
    }
  }
`;

const StyledMenuItem = styled.li`
  font-family: 'Spartan', sans-serif;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 0.9375rem;
  line-height: 1.5625rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding-right: 1.5rem;
  left: 1.875rem;

  &::before {
    content: '';
    position: absolute;
    width: 1.25rem;
    height: 1.25rem;
    background-color: ${({ $planet }) => $planet.color};
    border-radius: 100%;
    left: -1.875rem;
  }

  @media screen and (min-width: 768px) {
    padding: 0;
    left: 0;
    font-size: 0.6875rem;

    &::before {
      display: none;
    }
  }

  @media screen and (min-width: 1400px) {
    font-size: 1.25rem;
  }
`;

const StyledImg = styled.img`
  display: flex;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const StyledHamburger = styled.img`
  opacity: ${({ $openMenu }) => ($openMenu ? '50%' : '100%')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export { StyledMenu, StyledMenuItem, StyledImg, StyledHamburger };
