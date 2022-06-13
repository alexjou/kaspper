import Colors from "../../constants/Colors";
import styled from "styled-components";

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${Colors.theme.white};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-top: 20%;
`
export const InputView = styled.View`  
  margin: 16px;
  border-color: ${(props) => (props.erro ? Colors.theme.border_error : Colors.theme.gray_border)};
  border-bottom-width: 1px;
  border-radius: 8px;
`
export const TextError = styled.Text`  
  padding-left: 20px;
  margin-bottom: -10px;
  margin-top: -10px;
  color: ${Colors.theme.border_error};
`