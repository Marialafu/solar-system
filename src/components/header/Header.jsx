import { Link } from 'react-router-dom';
import { StyledHeader, StyledTitle } from './header.styled';

const Header = () => {
  return (
    <StyledHeader>
      <StyledTitle>
        <Link to='/'>THE PLANETS</Link>
      </StyledTitle>
    </StyledHeader>
  );
};

export default Header;
