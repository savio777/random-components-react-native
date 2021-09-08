import React from 'react';

import {View, Text} from 'react-native';
import Pie from 'react-native-pie';

import styles from './styles';

const percentages = [
  {
    percentage: 10,
    color: '#db3e2a',
  },
  {
    percentage: 50,
    color: '#4fb83d',
  },
  {
    percentage: 40,
    color: '#404FCD',
  },
];

const TestarGraficos = () => (
  <View style={styles.container}>
    <Pie
      radius={80}
      innerRadius={40}
      sections={percentages}
      dividerSize={2}
      strokeCap={'butt'}
    />
    <View style={styles.gauge}>
      <Text style={styles.gaugeText}>50%</Text>
    </View>
  </View>
);

export default TestarGraficos;
