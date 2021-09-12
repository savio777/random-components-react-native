import {StyleSheet} from 'react-native';
import {color} from '../../core/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    maxHeight: 50,
    minHeight: 40,
    backgroundColor: color.purple,
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    fontWeight: 'bold',
  },
  containerPrincipal: {
    flex: 1,
    minHeight: 40,
    width: '60%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSecondary: {
    flex: 1,
    justifyContent: 'center',
    minHeight: 40,
    paddingHorizontal: 20,
  },
});

export default styles;
