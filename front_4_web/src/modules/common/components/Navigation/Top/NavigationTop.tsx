import { StyledNavigationTop, StyledDiv } from "./NavigationTop.styled";
import Brand from '../../../../../assets/images/Brand.svg';

export const NavigationTop = () => {
  return(
    <StyledNavigationTop>    
      <StyledDiv>
        <img src={Brand} alt="Brand" />
      </StyledDiv>
      <StyledDiv>
        <p>Notif</p>
        <p>Profile</p>
      </StyledDiv>
    </StyledNavigationTop>
  );
};