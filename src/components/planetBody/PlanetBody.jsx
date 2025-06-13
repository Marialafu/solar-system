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
        <PlanetImg tab={tab} planetSelected={planetSelected} />
        <PlanetInfo
          planetSelected={planetSelected}
          tab={tab}
          planetName={planetName}
        />
        <Tabs tab={tab} setTab={setTab} planetSelected={planetSelected} />
      </StyledContainer>
      <PlanetData {...planetSelected} />
    </>
  );
};

export default PlanetBody;
