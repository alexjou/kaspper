import styled from "styled-components";
import Colors from "../../constants/Colors";
import Constants from "expo-constants";

const statusBarHeight = Constants.statusBarHeight;

export const Container = styled.SafeAreaView`
  background-color: ${Colors.theme.default};
  padding: 20px;
  padding-bottom: 0px;
  flex: 1;
  padding-top: ${statusBarHeight}px;
`;

export const Header = styled.View`
  margin: 5px;
  flex-direction: row;
  justify-content: space-between;
`;

export const TextHeader = styled.Text`
  font-size: 18px;
    margin-left: 7px;
    margin-bottom: 10px;
    font-weight: 700;
    color: ${Colors.theme.white};
    align-self: center;
`

export const Content = styled.ScrollView`
  
`;

export const Card = styled.View`
  border-width: 1px;
  border-radius: 30px;
  flex-direction: column;
  justify-content: center;
  margin-bottom: 20px;
  padding-left: 20px;
  border-color: ${Colors.theme.black};
`
export const ComponentCard = styled.View`
  margin: 10px;
`;

export const TextTitleCard = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: ${Colors.theme.black};
`
export const TextDescriptionCard = styled.Text`
  font-size: 18px;
  font-weight: 700;
  color: ${Colors.theme.black};
`
