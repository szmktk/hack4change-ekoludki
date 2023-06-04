import { Button } from 'antd';
import { StyledNavigationBottom } from './styles/NavigationBottom.style' 
export const NavigationBottom = () => {
  return(
    <StyledNavigationBottom>
      <Button type='primary'>Route 1</Button> 
      <Button type='primary'>Route 2</Button> 
      <Button type='primary'>Route 3</Button> 
      <Button type='primary'>Route 4</Button> 
    </StyledNavigationBottom>
  );
};