import styled from 'styled-components';
import { COLORS } from '../../styles/colors';
import { FONTS } from '../../styles/fonts';

const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.25rem 1.5rem;
  position: relative;
  text-transform: uppercase;

  &::before {
    content: '';
    top: 3.125rem;
    right: 0%;
    position: absolute;
    height: 0.0625rem;
    width: 100vw;
    background-color: ${COLORS.white500};
  }

  @media screen and (min-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    top: 31.875rem;
    left: 31.25rem;

    &::before {
      display: none;
    }
  }

  @media screen and (min-width: 1400px) {
    left: 54.0625rem;
  }
`;
const StyledActivatedText = styled.span`
  font-family: ${FONTS.secondaryFont};
  font-size: 0.9375rem;
  letter-spacing: 0.1206rem;
  color: ${({ $tab, $eachTab }) => ($tab === $eachTab ? 'white' : 'grey')};
  position: relative;
  width: fit-content;
  cursor: pointer;

  &::before {
    content: '';
    position: absolute;
    top: 1.6875rem;
    height: 0.25rem;
    width: 110%;
    left: -3%;
    background-color: ${({ $planet, $tab, $eachTab }) =>
      $tab === $eachTab ? $planet.activeColor : 'transparent'};
  }

  @media screen and (min-width: 768px) {
    width: 17.5625rem;
    height: 2.5rem;
    border: 0.0625rem solid
      ${({ $tab, $eachTab }) => ($tab === $eachTab ? 'transparent' : 'grey')};
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0.4375rem 0 0.4375rem 1.25rem;
    background-color: ${({ $tab, $eachTab }) =>
      $tab === $eachTab ? '#419EBB' : 'transparent'};

    &::before {
      display: none;
    }
  }

  @media screen and (min-width: 1400px) {
    width: 25rem;
    top: -2.5rem;
    height: 3.5rem;
  }
`;

export { StyledContainer, StyledActivatedText };
