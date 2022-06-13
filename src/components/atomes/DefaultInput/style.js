import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const Container = styled.View`
  width: 100%;
  height: 25px;
  background-color: ${Colors.theme.white};
  border-radius: 16px;
  margin-bottom: 5%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border: ${(props) => (props.validation ? 'none' : ' 1px solid red')};
`;

export const ContainerInput = styled.View`
  flex-direction: row;
  align-items: center;
  width: 80%;
`;

export const Input = styled.TextInput`
  color: ${Colors.theme.gray};
  font-size: 16px;
  width: 100%;
  height: 64px;
  margin-left: 4%;
`;