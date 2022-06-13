import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const ButtonStyled = styled.TouchableOpacity`
  background-color: ${(props) => (props.color ? props.color : Colors.theme.default)};
  border-color: ${(props) => (props.borderColor ? props.borderColor : props.color)};
  border-width: 3px;
  height: 60px;
  margin: 5%;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
  margin-bottom: 4%;
`;