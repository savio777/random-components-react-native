import React, {useState} from 'react';

import {View, Text, TouchableOpacity, Image} from 'react-native';

import Camera from '../../components/Camera';
import styles from './styles';

const TestarCamera = () => {
  const [abrirCamera, setAbrirCamera] = useState(false);
  const [fotos, setFotos] = useState([]);

  const adicionarFoto = uri => {
    setAbrirCamera(false);
    setFotos([...fotos, uri]);
    console.log(uri);
  };

  return (
    <>
      <Camera
        cancelar={() => setAbrirCamera(false)}
        open={abrirCamera}
        pegarFoto={adicionarFoto}
      />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => setAbrirCamera(true)}>
          <Text>abrir camera</Text>
        </TouchableOpacity>
        {fotos.length > 0 &&
          fotos.map((f, index) => (
            <Image key={String(index)} source={{uri: f}} style={styles.image} />
          ))}
      </View>
    </>
  );
};

export default TestarCamera;
