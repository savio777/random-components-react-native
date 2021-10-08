import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 2,
    paddingHorizontal: 10,
    borderWidth: 2,
    borderRadius: 20,
    marginTop: 15,
  },
  input: {
    width: '100%',
  },
  error: {
    color: '#e31931',
    textAlign: 'left',
    width: '100%',
    fontWeight: 'bold',
    fontSize: 12,
  },
});

export default styles;
