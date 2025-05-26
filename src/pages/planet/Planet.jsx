import Header from '../../components/header/Header';

import Menu from '../../components/menu/Menu';
import PlanetBody from '../../components/planetBody/PlanetBody';
import { PLANETS_INFO } from '../../constants/planets-info';

const Planet = ({ planetName }) => {
  const planetSelected = PLANETS_INFO[planetName];

  return (
    <>
      <Header />
      <Menu />
      <PlanetBody planetSelected={planetSelected} planetName={planetName} />
    </>
  );
};

export default Planet;
