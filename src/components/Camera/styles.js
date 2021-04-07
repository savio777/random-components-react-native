import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#000',
  secundary: '#e7e7e7',
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  camera: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black',
  },
  viewBotao: {
    flex: 1,
  },
  containerBotaoFechar: {flex: 1, alignSelf: 'flex-start'},
  containerBotao: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  botaoPrincipal: {
    flex: 0,
    backgroundColor: colors.primary,
    borderRadius: 35,
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  },
  botao: {
    flex: 0,
    backgroundColor: colors.secundary,
    borderWidth: 1,
    borderColor: colors.primary,
    borderRadius: 35,
    padding: 15,
    flexDirection: 'row',
    alignSelf: 'center',
    margin: 20,
  },
  textoBotao: {fontSize: 14, color: '#000', marginRight: 2},
  carregando: {
    flex: 1,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default styles;
