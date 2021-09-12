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
    padding: 10,
    paddingTop: 40,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

export default styles;
