import React, {useState} from 'react';

import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';

import Camera from '../components/Camera';

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  button: {padding: 5, borderWidth: 1, borderColor: '#ccc', margin: 5},
  image: {height: 100, width: 100},
});

const Home = () => {
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

export default Home;
