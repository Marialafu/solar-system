import { TABS_INFO } from '../../constants/tabs-info';
import {
  StyledGeologyImg,
  StyledImg,
  StyledImgContainer
} from './planet-img.styled';

const PlanetImg = ({ planetSelected, tab }) => {
  const src = planetSelected.images[tab];
  const img = tab === TABS_INFO.surface ? src.main : src;

  return (
    <StyledImgContainer>
      <StyledImg src={img} $planetWidth={planetSelected.planetWidth} />
      {tab === TABS_INFO.surface && <StyledGeologyImg src={src.geology} />}
    </StyledImgContainer>
  );
};

export default PlanetImg;
