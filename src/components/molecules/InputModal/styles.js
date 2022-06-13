import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const ModalButton = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${Colors.theme.tertiary};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
  position: absolute;
  bottom: 15px;
`;

export const ModalContainer = styled.View`
  padding: 20px;
  justify-content: center;
  align-items: center;
  flex: 1;
  background-color: ${Colors.theme.default};
`;

export const ModalView = styled.View`
  background-color: ${Colors.theme.secondary};
  border-radius: 20px;
  padding: 35px;
`;

export const StyledInput = styled.TextInput`
  width: 300px;
  height: 50px;
  background-color: ${Colors.theme.tertiary};
  padding: 10px;
  font-size: 16px;
  border-radius: 10px;
  color: ${Colors.theme.secondary};
  letter-spacing: 1px;
`;

export const ModalAction = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.color};
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const ModalActionGroup = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: 30px;
`;

export const ModalIcon = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 30px;
`;

export const HeaderTitle = styled.Text`
  font-size: 35px;
  font-weight: bold;
  color: ${Colors.theme.tertiary};
  letter-spacing: 2px;
  font-style: italic;
`;