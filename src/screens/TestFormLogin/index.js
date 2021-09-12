import React, {useState, useEffect} from 'react';

import {View, StatusBar} from 'react-native';
import Input from '../../components/Input';
import {color} from '../../core/helper';

import styles from './styles';

const TestFormLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    setEmail('');
    setPassword('');
  }, []);

  return (
    <>
      <StatusBar backgroundColor={color.purple} />
      <View style={styles.container}>
        <View style={styles.containerUser} />
        <View style={styles.containerForm}>
          <Input
            nameIcon="email"
            value={email}
            onChangeText={setEmail}
            placeholder="Enter your email"
            keyboardType="email-address"
          />
          <Input
            nameIcon="lock"
            value={password}
            onChangeText={setPassword}
            placeholder="Enter your password"
            secureTextEntry
          />
        </View>
      </View>
    </>
  );
};

export default TestFormLogin;
