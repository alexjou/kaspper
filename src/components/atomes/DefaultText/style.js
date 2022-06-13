import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const TextStyled = styled.Text`
  color: ${(props) => (props.color ? props.color : Colors.theme.default)};
  font-size: ${(props) => (props.size ? props.size : 16)}px;
  font-weight: bold;
`;