import React, {useState, useEffect} from 'react';

import {View, TouchableOpacity, Text} from 'react-native';
import Input from '../../components/Input';

import styles from './styles';

const TestFormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <View style={styles.container}>
      <Input
        value={email}
        onChangeText={setEmail}
        placeholder="email"
        keyboardType="email-address"
      />
      <Input
        value={password}
        onChangeText={setPassword}
        placeholder="senha"
        secureTextEntry
      />
    </View>
  );
};

export default TestFormLogin;
