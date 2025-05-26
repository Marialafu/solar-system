import { Link } from 'react-router-dom';
import { PLANETS_MENU } from '../../constants/planets-menu';
import {
  StyledHamburger,
  StyledImg,
  StyledMenu,
  StyledMenuItem
} from './Menu.styles';

const Menu = ({ openMenu, setOpenMenu }) => {
  return (
    <>
      <StyledHamburger
        src='/assets/icon-hamburger.svg'
        alt='three lines menu'
        onClick={() => setOpenMenu(!openMenu)}
        $openMenu={openMenu}
      />
      <nav>
        <StyledMenu $openMenu={openMenu}>
          {PLANETS_MENU.map(planet => {
            return (
              <StyledMenuItem key={planet.id} $planet={planet}>
                <Link to={planet.link} onClick={() => setOpenMenu(!openMenu)}>
                  {planet.name}
                </Link>
                <StyledImg src='/assets/icon-chevron.svg' alt='chevron' />
              </StyledMenuItem>
            );
          })}
        </StyledMenu>
      </nav>
    </>
  );
};

export default Menu;
