import {StyleSheet} from 'react-native';

import {color} from '../../core/helper';

const styles = StyleSheet.create({
  container: {
    backgroundColor: color.purpleLight,
    flex: 1,
  },
  containerUser: {height: '40%'},
  containerForm: {
    alignItems: 'center',
    height: '60%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default styles;
