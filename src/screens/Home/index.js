import React, {useState} from 'react';

import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import VerPdf from '../../components/VerPdf';
import styles from './styles';

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
              <Text numberOfLines={2} style={styles.textButton}>
                Testar PDF
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TestarCamera')}
              style={styles.button}>
              <Icon name="camera" style={styles.icon} />
              <Text numberOfLines={2} style={styles.textButton}>
                Testar Camera
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TestarCalendario')}
              style={styles.button}>
              <Icon name="calendar-range" style={styles.icon} />
              <Text numberOfLines={2} style={styles.textButton}>
                Testar Calendário
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TestarGraficos')}
              style={styles.button}>
              <Icon name="chart-donut" style={styles.icon} />
              <Text numberOfLines={2} style={styles.textButton}>
                Testar Gráficos
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.viewRow}>
          <View style={styles.viewColumn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('TestFormLogin')}
              style={styles.button}>
              <Icon name="account" style={styles.icon} />
              <Text numberOfLines={2} style={styles.textButton}>
                Teste Form Login
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}
