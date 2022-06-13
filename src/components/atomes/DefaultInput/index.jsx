import React, { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';
import { TextInputMask } from 'react-native-masked-text';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native';
// import images from '../../constants/images';
import { Container, ContainerInput, Input } from './style';
import Colors from '../../../constants/Colors';



const DefaultInput = ({
  icon,
  placeholder,
  secureTextEntry,
  type,
  value,
  getInput,
  mask,
  validation
}) => {
  const [pwd, setPwd] = useState(secureTextEntry);

  const handlePwd = () => {
    setPwd(!pwd);
  };
  const changeText = (e) => {
    getInput(e);
  };

  return (
    <Container validation={validation}>
      <ContainerInput>
        {mask !== '' ? (
          <TextInputMask
            placeholder={placeholder}
            type={mask}
            value={value}
            onChangeText={getInput}
            style={{
              marginHorizontal: '3%',
              color: Colors.theme.gray,
              width: '100%'
            }}
          />
        ) : (
          <Input
            secureTextEntry={pwd}
            placeholder={placeholder}
            keyboardType={type}
            value={value}
            onChangeText={(e) => changeText(e)}
            autoCapitalize="none"
            autoCorrect={false}
          />
        )}
      </ContainerInput>
      {secureTextEntry && (
        <TouchableOpacity onPress={handlePwd}>
          {pwd ? (
            <FontAwesome name="eye-slash" size={25} color={Colors.theme.default} />
          ) : (
            <FontAwesome name="eye" size={25} color={Colors.theme.default} />
          )}
        </TouchableOpacity>
      )}
    </Container>
  );
};

DefaultInput.propTypes = {
  icon: PropTypes.string,
  placeholder: PropTypes.string,
  secureTextEntry: PropTypes.bool,
  type: PropTypes.string,
  value: PropTypes.string,
  mask: PropTypes.string,
  getInput: PropTypes.any.isRequired,
  validation: PropTypes.bool
};
DefaultInput.defaultProps = {
  icon: '',
  placeholder: '',
  secureTextEntry: false,
  type: 'default',
  value: '',
  mask: '',
  validation: true
};

export default DefaultInput;
