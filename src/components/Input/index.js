import React, {useState} from 'react';

import {TextInput, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Input = ({
  value,
  onChangeText = () => {},
  placeholder = '',
  placeholderColor = '',
  keyboardType = '',
  secureTextEntry = false,
}) => {
  const [showSecureText, setShowSecureText] = useState(true);

  return (
    <View style={styles.container}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor={placeholderColor}
        style={[styles.input, secureTextEntry && {width: '90%'}]}
        secureTextEntry={secureTextEntry && showSecureText}
        keyboardType={keyboardType}
      />
      {secureTextEntry && (
        <TouchableOpacity onPress={() => setShowSecureText(!showSecureText)}>
          <Icon
            name={showSecureText ? 'eye' : 'eye-off'}
            size={30}
            style={{marginLeft: 7}}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Input;
