import React, { Fragment, memo } from "react";
import { View } from "react-native";
import { ViewStyled } from './styles';
import Colors from "../../../constants/Colors";
import { MaterialIndicator } from "react-native-indicators";

export const LoadingIndicator = memo((props) => {
  const { isLoading } = props;

  return (
    <Fragment>
      {isLoading && (
        <ViewStyled>
          <MaterialIndicator size={30} color={Colors.theme.white} />
        </ViewStyled>
      )}
    </Fragment>
  )
});