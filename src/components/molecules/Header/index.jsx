import { Entypo } from "@expo/vector-icons";
import React, { useContext } from "react";
import Colors from "../../../constants/Colors";
import AuthContext from "../../../contexts/auth";

import {
  HeaderView,
  HeaderTitle,
  HeaderButton,
} from "./styles";

const Header = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <HeaderView>
      <HeaderTitle>Lista de Tarefas</HeaderTitle>
      <HeaderButton onPress={() => signOut()}>
        <Entypo name="log-out" size={25} color={Colors.theme.tertiary} />
      </HeaderButton>
    </HeaderView>
  );
};

export default Header;
