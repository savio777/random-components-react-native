import {StyleSheet} from 'react-native';
import {color} from '../../core/helper';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    backgroundColor: color.purple,
    padding: 15,
    borderRadius: 20,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: '#fff', fontWeight: 'bold', fontSize: 18, width: '90%'},
});

export default styles;
