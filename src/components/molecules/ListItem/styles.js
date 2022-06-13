import styled from "styled-components";
import Colors from "../../../constants/Colors";

export const ListView = styled.TouchableHighlight`
  background-color: ${Colors.theme.secondary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: space-around;
  margin-bottom: 15px;
  border-radius: 10px;
`;

export const ListViewHidden = styled.View`
  background-color: ${Colors.theme.tertiary};
  min-height: 85px;
  width: 100%;
  padding: 15px;
  justify-content: center;
  align-items: flex-start;
  margin-bottom: 15px;
  border-radius: 11px;
`;

export const HiddenButton = styled.TouchableOpacity`
  width: 55px;
  align-items: center;
`;

export const TodoText = styled.Text`
  font-size: 16px;
  letter-spacing: 1px;
  color: ${Colors.theme.tertiary};
`;

export const TodoDate = styled.Text`
  font-size: 10px;
  letter-spacing: 1px;
  color: ${Colors.theme.alternative};
  text-align: right;
  text-transform: uppercase;
`;

// Text for swiped todo row
export const SwipedTodoText = styled(TodoText)`
  color: ${Colors.theme.alternative};
  font-style: italic;
  text-decoration: line-through;
`;