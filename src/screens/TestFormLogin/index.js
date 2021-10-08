import React from 'react';

import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import FormLogin from '../../components/FormLogin';
import Header from '../../components/Header';

import styles from './styles';

const TestFormLogin = () => {
  return (
    <>
      <Header back />
      <View style={styles.container}>
        <View style={styles.containerUser}>
          <View style={styles.userIcon}>
            <Icon name="account" color="#BBDEFB" size={60} />
          </View>
          <Text style={styles.textUser}>Login</Text>
        </View>
        <View style={styles.containerForm}>
          <FormLogin />
        </View>
      </View>
    </>
  );
};

export default TestFormLogin;
