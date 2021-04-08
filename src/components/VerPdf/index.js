import React, {useEffect, useState} from 'react';

import {View, StyleSheet, Dimensions, Modal} from 'react-native';
import Pdf from 'react-native-pdf';
import Icons from 'react-native-vector-icons/MaterialCommunityIcons';

const styles = StyleSheet.create({
  containerBotao: {
    flexDirection: 'row',
    backgroundColor: '#ccc',
  },
  center: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  botao: {
    flex: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 5,
    padding: 0,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  pdf: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
    flex: 1,
  },
});

export default function VerPdf({uri, open, setOpen}) {
  const [scale, setScale] = useState(1.0);
  const [numberPage, setNumberPage] = useState(1);
  const [numberPagesTotal, setNumberPagesTotal] = useState(null);

  useEffect(() => {
    setScale(1.0);
    setNumberPage(1);
  }, [open]);

  const scaleUp = () => scale < 3.0 && setScale(scale + 1.0);
  const scaleDown = () => scale > 1.0 && setScale(scale - 1.0);

  const pageUp = () =>
    numberPage < numberPagesTotal && setNumberPage(numberPage + 1);
  const pageDown = () => numberPage > 1 && setNumberPage(numberPage - 1);

  return (
    <Modal
      presentationStyle="fullScreen"
      animationType="slide"
      transparent={false}
      visible={open}>
      <View style={styles.containerBotao}>
        <View style={styles.botao}>
          <Icons name="close" size={30} onPress={() => setOpen(false)} />
        </View>
        <View style={styles.center}>
          <View style={styles.botao}>
            <Icons name="chevron-left" size={30} onPress={pageDown} />
          </View>
          <View style={styles.botao}>
            <Icons name="magnify-minus-outline" size={30} onPress={scaleDown} />
          </View>
          <View style={styles.botao}>
            <Icons name="magnify-plus-outline" size={30} onPress={scaleUp} />
          </View>
          <View style={styles.botao}>
            <Icons name="chevron-right" size={30} onPress={pageUp} />
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <Pdf
          source={{uri}}
          style={styles.pdf}
          scale={scale}
          page={numberPage}
          onLoadComplete={numberOfPages => {
            setNumberPagesTotal(numberOfPages);
          }}
          onError={error => {
            console.log(error);
          }}
        />
      </View>
    </Modal>
  );
}
