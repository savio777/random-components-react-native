import React, {useState} from 'react';

import {View, Platform, Text, TouchableOpacity} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import {format} from 'date-fns';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './styles';

export default function TestarCalendario() {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === 'ios');
    setDate(currentDate);
  };

  return (
    <View style={styles.container}>
      <View style={styles.viewTitle}>
        <Icon
          name="calendar-range"
          color="#000"
          size={25}
          style={{marginRight: 5}}
        />
        <Text style={styles.textButton}>{format(date, 'dd/MM/yyyy')}</Text>
      </View>
      <TouchableOpacity style={styles.button} onPress={() => setShow(true)}>
        <Text style={styles.textButton}>Mudar data</Text>
      </TouchableOpacity>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          minimumDate={new Date()}
          value={date}
          mode="date"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}
