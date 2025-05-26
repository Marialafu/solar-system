import { Route, Routes } from 'react-router-dom';
import Home from '../../pages/home/Home';
import Planet from '../../pages/planet/Planet';
import { PLANETS_MENU } from '../../constants/planets-menu';

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      {PLANETS_MENU.map(planet => (
        <Route
          key={planet.id}
          path={planet.link}
          element={<Planet planetName={planet.name} />}
        />
      ))}
    </Routes>
  );
};

export default Router;
