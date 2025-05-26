import { useState } from 'react';
import Tabs from '../tabs/Tabs';
import { StyledContainer } from './planet-body.styled';
import { TABS_INFO } from '../../constants/tabs-info';
import PlanetImg from '../planetImg/PlanetImg';
import PlanetInfo from '../planetInfo/PlanetInfo';
import PlanetData from '../planetData/PlanetData';

const PlanetBody = ({ planetName, planetSelected }) => {
  const [tab, setTab] = useState(TABS_INFO.overview);

  return (
    <>
      <StyledContainer>
        <PlanetImg />
        <PlanetInfo />
        <Tabs tab={tab} setTab={setTab} planetSelected={planetSelected} />
      </StyledContainer>
      <PlanetData />
    </>
  );
};

export default PlanetBody;
