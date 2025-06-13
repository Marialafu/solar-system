import styled from 'styled-components';
import { COLORS } from '../../styles/colors';

const StyledSourceContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  margin-bottom: 1.75rem;

  @media screen and (min-width: 768px) {
    justify-content: left;
  }
`;

const StylesSourceTitle = styled.span`
  font-weight: 100;
  font-family: 'Spartan', sans-serif;
  font-size: 0.75rem;
  color: ${COLORS.white500};
`;

const StyledSourceLink = styled.a`
  font-weight: 700;
  font-family: 'Spartan', sans-serif;
  text-decoration: underline;
  font-size: 0.75rem;
  color: ${COLORS.white500};
`;

export { StyledSourceContainer, StylesSourceTitle, StyledSourceLink };
