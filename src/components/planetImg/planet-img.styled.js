import styled from 'styled-components';

const StyledImgContainer = styled.div`
  padding-top: 2.375rem;
  width: 20.4375rem;
  height: 16.4375rem;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 768px) {
    padding: 0;
    width: 45.4375rem;
    height: 16.4375rem;
    position: relative;
    top: -1.875rem;
    grid-column: 1/3;
  }

  @media screen and (min-width: 1400px) {
    position: fixed;
    padding: 0;
    left: 8.4375rem;
    top: 23.75rem;
    height: 28.125rem;
    align-items: self-start;
  }
`;

const StyledImg = styled.img`
  position: relative;
  width: ${({ $planetWidth }) => $planetWidth};
  height: auto;

  @media screen and (min-width: 768px) {
    width: ${({ $planetWidth }) => $planetWidth / 10 + 'px'};
  }

  @media screen and (min-width: 1400px) {
    scale: 130%;
    top: 2.5rem;
  }
`;

const StyledGeologyImg = styled.img`
  position: absolute;
  width: 4.375rem;
  bottom: 30%;

  @media screen and (min-width: 768px) {
    scale: 170%;
    bottom: 50%;
    top: 12.5rem;
  }
  @media screen and (min-width: 1400px) {
    bottom: 50%;
    top: 18.75rem;
    scale: 190%;
  }
`;

export { StyledImgContainer, StyledImg, StyledGeologyImg };
