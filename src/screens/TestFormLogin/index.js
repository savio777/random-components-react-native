import React, {useState, useEffect} from 'react';

import {View, StatusBar, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import Button from '../../components/Button';
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

  const handleSubmit = () => console.log(email, password);

  return (
    <>
      <StatusBar backgroundColor={color.purple} />
      <View style={styles.container}>
        <View style={styles.containerUser}>
          <View style={styles.userIcon}>
            <Icon name="account" color="#BBDEFB" size={60} />
          </View>
          <Text style={styles.textUser}>Login</Text>
        </View>
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
          <Button nameIcon="arrow-right" text="LOGIN" onPress={handleSubmit} />
        </View>
      </View>
    </>
  );
};

export default TestFormLogin;
