import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 1.5rem;
  position: relative;

  &::before {
    content: '';
    top: 6.5625rem;
    right: 0%;
    position: absolute;
    height: 0.0625rem;
    width: 100vw;
    background-color: ${COLORS.white500};
  }

  @media screen and (min-width: 768px) {
    justify-content: center;
    padding: 1rem 0 0 0;
    margin-bottom: 2.4375rem;

    &::before {
      display: none;
    }
  }
  @media screen and (min-width: 1400px) {
    justify-content: left;
    padding: 1rem 0 0 2rem;
    margin-bottom: 2.4375rem;

    &::before {
      display: none;
    }
  }
`;

const StyledTitle = styled.h1`
  font-size: 1.75rem;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }

  @media screen and (min-width: 1400px) {
    font-size: 2.125rem;
  }
`;

const StyledImg = styled.img`
  opacity: ${({ $openMenu }) => ($openMenu ? '50%' : '100%')};

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export { StyledHeader, StyledTitle, StyledImg };
