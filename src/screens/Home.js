import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {useNavigation} from '@react-navigation/native';

import VerPdf from '../components/VerPdf';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

const urlPdf = 'https://bitcoin.org/files/bitcoin-paper/bitcoin_pt_br.pdf';

export default function Home() {
  const navigation = useNavigation();

  const [mostrarPdf, setMostrarPdf] = useState(false);

  return (
    <>
      <VerPdf open={mostrarPdf} uri={urlPdf} setOpen={setMostrarPdf} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setMostrarPdf(true)}>
          <Text>testar PDF</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('TestarCamera')}>
          <Text>testar Camera</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}
