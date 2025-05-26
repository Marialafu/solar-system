import { PLANETS_MENU } from '../../constants/planets-menu';
import {
  StyledHamburger,
  StyledImg,
  StyledLink,
  StyledMenu,
  StyledMenuItem
} from './Menu.styles';
import { useState } from 'react';

const Menu = () => {
  const [openMenu, setOpenMenu] = useState(false);

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
                <StyledLink
                  to={planet.link}
                  onClick={() => setOpenMenu(!openMenu)}
                >
                  {planet.name}
                </StyledLink>
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
