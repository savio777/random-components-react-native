import React, {useState} from 'react';

import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {color} from '../../core/helper';
import styles from './styles';

const Input = ({
  value,
  nameIcon,
  onChangeText = () => {},
  placeholder = '',
  placeholderColor = '',
  keyboardType = '',
  secureTextEntry = false,
}) => {
  const [showSecureText, setShowSecureText] = useState(true);
  const [isFocused, setIsFocused] = useState(false);

  return (
    <View
      style={[
        styles.container,
        {borderColor: isFocused ? color.purple : '#a3a3a3'},
      ]}>
      {nameIcon && (
        <Icon
          name={nameIcon}
          color={isFocused ? color.purple : '#a3a3a3'}
          size={25}
          style={{marginRight: 10}}
        />
      )}
      <TextInput
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, (secureTextEntry || nameIcon) && {width: '75%'}]}
        secureTextEntry={secureTextEntry && showSecureText}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setShowSecureText(!showSecureText)}>
          <Icon
            name={showSecureText ? 'eye' : 'eye-off'}
            size={25}
            color={isFocused ? color.purple : '#a3a3a3'}
            style={{marginLeft: 10}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
