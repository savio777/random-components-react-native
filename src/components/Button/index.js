import React from 'react';

import {Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

const Button = ({text, onPress, nameIcon}) => (
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.text}>{text}</Text>
    {nameIcon && <Icon name={nameIcon} color="#fff" size={25} />}
  </TouchableOpacity>
);

export default Button;
