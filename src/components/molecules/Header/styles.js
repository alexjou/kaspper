import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const HeaderView = styled.View`
  padding-vertical: 10px;
  margin-bottom: 10px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${Colors.theme.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`;

export const HeaderButton = styled.TouchableOpacity`
  font-weight: bold;
  color: ${Colors.theme.tertiary};
`;