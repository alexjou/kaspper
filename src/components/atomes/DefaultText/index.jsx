import React from 'react';
import PropTypes from 'prop-types';
import { TextStyled } from './style';
import Colors from '../../../constants/Colors';

const DefaultText = ({
  color,
  size,
  children,
  style,
  ellipsize,
  numberOfLines
}) => {
  return (
    <TextStyled
      color={color}
      size={size}
      style={style}
      ellipsizeMode={ellipsize}
      numberOfLines={numberOfLines}
    >
      {children}
    </TextStyled>
  );
};

DefaultText.propTypes = {
  color: PropTypes.string,
  children: PropTypes.any,
  size: PropTypes.number,
  style: PropTypes.any,
  ellipsize: PropTypes.string,
  numberOfLines: PropTypes.number
};
DefaultText.defaultProps = {
  color: Colors.theme.black,
  size: 16,
  style: {}
};

export default DefaultText;
