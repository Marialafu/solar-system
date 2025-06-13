import PlanetSource from '../planetSource/PlanetSource';
import {
  StyledDescriptionContainer,
  StyledPlanetInfoContainer,
  StyledText,
  StyledTitle
} from './planet-info.styles';

const PlanetInfo = ({ planetSelected, planetName, tab }) => {
  return (
    <StyledPlanetInfoContainer>
      <StyledDescriptionContainer>
        <StyledTitle>{planetName}</StyledTitle>
        <StyledText>{planetSelected.texts[tab]}</StyledText>
      </StyledDescriptionContainer>
      <PlanetSource {...planetSelected} />
    </StyledPlanetInfoContainer>
  );
};

export default PlanetInfo;
