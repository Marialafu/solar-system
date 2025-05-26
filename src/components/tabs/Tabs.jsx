import { v4 } from 'uuid';
import { TABS } from '../../constants/tabs-info';
import { StyledActivatedText, StyledContainer } from './tabs.styled';

const Tabs = ({ planetSelected, tab, setTab }) => {
  return (
    <StyledContainer>
      {TABS.map((eachTab, index) => {
        return (
          <StyledActivatedText
            key={v4()}
            $planet={planetSelected}
            onClick={() => setTab(index)}
            $tab={tab}
            $eachTab={index}
          >
            {eachTab}
          </StyledActivatedText>
        );
      })}
    </StyledContainer>
  );
};

export default Tabs;
