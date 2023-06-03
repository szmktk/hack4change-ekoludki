import { StyledNavigationTop, StyledDiv, NavigationProfile } from "./NavigationTop.styled";
import Brand from '../../../../../assets/images/Brand.svg';
import { NotificationFilled } from '@ant-design/icons';
import { Button } from "antd";

export const NavigationTop = () => {
  return(
    <StyledNavigationTop>    
      <StyledDiv>
        <img src={Brand} alt="Brand" />
      </StyledDiv>
      <StyledDiv>
        <Button type="ghost" shape="circle" icon={<NotificationFilled />} />
        <NavigationProfile />
      </StyledDiv>
    </StyledNavigationTop>
  );
};