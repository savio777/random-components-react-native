import React from 'react';

import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {color} from '../../core/helper';
import styles from './styles';

const Header = ({title = 'App', back}) => {
  const navigation = useNavigation();

  return (
    <>
      <StatusBar backgroundColor={color.purple} />
      <View style={styles.container}>
        <View style={styles.containerSecondary}>
          {back && (
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" color="#fff" size={20} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.containerPrincipal}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.containerSecondary} />
      </View>
    </>
  );
};

export default Header;
