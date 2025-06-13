import {
  StyledSourceContainer,
  StyledSourceLink,
  StylesSourceTitle
} from './planet-source.styles';

const PlanetSource = ({ link }) => {
  return (
    <StyledSourceContainer>
      <StylesSourceTitle>Source:</StylesSourceTitle>
      <StyledSourceLink target='_blank' href={link}>
        Wikipedia
      </StyledSourceLink>
      <img src='/assets/icon-source.svg' alt='' />
    </StyledSourceContainer>
  );
};

export default PlanetSource;
