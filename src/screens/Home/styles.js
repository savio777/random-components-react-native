import {StyleSheet} from 'react-native';

import {color} from '../../core/helper';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 10,
    backgroundColor: color.dark,
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 15,
    margin: 5,
    borderWidth: 2,
    borderColor: color.light,
    borderRadius: 10,
    backgroundColor: color.white,
    borderRightWidth: 3,
    borderBottomWidth: 3,
    borderEndColor: color.manatee,
    borderBottomColor: color.manatee,
    width: '80%',
    alignItems: 'center',
  },
  textButton: {
    color: color.dark,
    fontSize: 16,
    textAlign: 'center',
  },
  icon: {color: color.dark, fontSize: 22},
  viewRow: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  viewColumn: {width: '50%', alignItems: 'center'},
});

export default styles;
