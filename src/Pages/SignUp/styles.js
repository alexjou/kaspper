import Colors from "../../constants/Colors";
import styled from "styled-components";

export const Header = styled.View`
  padding: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
export const Title = styled.Text`
  font-size: 26px;
  font-weight: bold;
  margin-top: 20%;
  color: ${Colors.theme.default}
`;

export const Content = styled.View`
  margin-top: 5px;
  padding: 10px;
  padding-top: 0px;
  border-radius: 12px;
`;
