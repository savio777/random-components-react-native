import {StyleSheet} from 'react-native';

import {color} from '../../core/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    margin: 10,
    borderWidth: 2,
    borderColor: color.light,
    borderRadius: 10,
    backgroundColor: color.white,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderEndColor: color.manatee,
    borderBottomColor: color.manatee,
    width: '65%',
    alignItems: 'center',
  },
  textButton: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  viewTitle: {flexDirection: 'row', alignItems: 'center', marginBottom: 10},
});

export default styles;
