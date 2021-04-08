import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VerPdf from '../components/VerPdf';
import {color} from '../core/helper';

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
    width: '65%',
    alignItems: 'center',
  },
  textButton: {
    color: color.dark,
    fontSize: 16,
  },
  icon: {color: color.dark, fontSize: 22},
  viewRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  viewColumn: {width: '50%', alignItems: 'center'},
});

const urlPdf = 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf';

export default function Home() {
  const navigation = useNavigation();

  const [mostrarPdf, setMostrarPdf] = useState(false);

  return (
    <>
      <VerPdf open={mostrarPdf} uri={urlPdf} setOpen={setMostrarPdf} />
      <View style={styles.container}>
        <View style={styles.viewRow}>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => setMostrarPdf(true)}
              style={styles.button}>
              <Icon name="file-pdf-box" style={styles.icon} />
              <Text style={styles.textButton}>Testar PDF</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TestarCamera')}
              style={styles.button}>
              <Icon name="camera" style={styles.icon} />
              <Text style={styles.textButton}>Testar Camera</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
