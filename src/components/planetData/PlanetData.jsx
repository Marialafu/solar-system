import {
  StyledContainer,
  StyledInfoContainer,
  StyledInfoTitle,
  StyledInfoValue
} from './planet-data.styles';

const PlanetData = ({ rotationTime, revolutionTime, radius, averageTemp }) => {
  return (
    <StyledContainer>
      <StyledInfoContainer>
        <StyledInfoTitle>ROTATION TIME</StyledInfoTitle>
        <StyledInfoValue>{rotationTime}</StyledInfoValue>
      </StyledInfoContainer>

      <StyledInfoContainer>
        <StyledInfoTitle>REVOLUTION TIME</StyledInfoTitle>
        <StyledInfoValue>{revolutionTime}</StyledInfoValue>
      </StyledInfoContainer>

      <StyledInfoContainer>
        <StyledInfoTitle>RADIUS</StyledInfoTitle>
        <StyledInfoValue>{radius}</StyledInfoValue>
      </StyledInfoContainer>

      <StyledInfoContainer>
        <StyledInfoTitle>AVERAGE TEMP.</StyledInfoTitle>
        <StyledInfoValue>{averageTemp}</StyledInfoValue>
      </StyledInfoContainer>
    </StyledContainer>
  );
};

export default PlanetData;
