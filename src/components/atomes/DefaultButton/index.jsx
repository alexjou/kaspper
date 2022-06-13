import React from 'react';
import PropTypes from 'prop-types';

import Colors from '../../../constants/Colors';
import DefaultText from '../DefaultText';
import { ButtonStyled } from './styles';

const DefaultButton = ({
  color,
  colorText,
  children,
  disabled,
  handleClick,
  style,
  borderColor
}) => {
  return (
    <ButtonStyled
      disabled={disabled}
      style={style}
      onPress={handleClick}
      color={color}
      borderColor={borderColor}
    >
      <DefaultText color={colorText || Colors.theme.white}>
        {children}
      </DefaultText>
    </ButtonStyled>
  );
};

DefaultButton.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any.isRequired,
  handleClick: PropTypes.any.isRequired,
  disabled: PropTypes.bool,
  style: PropTypes.object,
};
DefaultButton.defaultProps = {
  color: Colors.theme.black,
  disabled: false,
  style: {},
};

export default DefaultButton;
