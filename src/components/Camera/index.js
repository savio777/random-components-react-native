import React, {useRef, useState, useEffect} from 'react';
import {
  Modal,
  View,
  TouchableOpacity,
  Image,
  ActivityIndicator,
} from 'react-native';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles, {colors} from './styles';

function Camera({
  open = false,
  pegarFoto = (value = '') => {},
  cancelar = () => {},
}) {
  const refCamera = useRef();

  const [flashOn, setFlashOn] = useState(false);
  const [camSelfie, setCamSelfie] = useState(false);
  const [uri, setUri] = useState('');

  useEffect(() => {
    setUri('');
  }, [open]);

  async function tirarFoto(camera) {
    // const response = await refCamera.current.takePicture({
    const response = await camera.takePictureAsync({
      quality: 0.9,
      base64: true,
    });

    console.log('res ', response.uri);
    setUri(response.uri);
  }

  return (
    <>
      {open ? (
        <Modal
          presentationStyle="fullScreen"
          animationType="slide"
          transparent={false}
          visible={open}>
          <View style={styles.container}>
            {uri ? (
              <>
                <Image source={{uri}} style={{width: '100%', height: '100%'}} />
                <View
                  style={[styles.containerBotao, {flex: 1, marginTop: -100}]}>
                  <View style={styles.viewBotao}>
                    <TouchableOpacity
                      onPress={() => setUri('')}
                      style={styles.botao}>
                      <Icon
                        style={{color: colors.primary}}
                        name="close"
                        size={25}
                        color="#000"
                      />
                    </TouchableOpacity>
                  </View>
                  <View style={styles.viewBotao}>
                    <TouchableOpacity
                      onPress={() => pegarFoto(uri)}
                      style={styles.botaoPrincipal}>
                      <Icon
                        style={{color: colors.secundary}}
                        name="check"
                        size={25}
                        color="#000"
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </>
            ) : (
              <RNCamera
                ref={refCamera}
                style={styles.camera}
                type={
                  camSelfie
                    ? RNCamera.Constants.Type.front
                    : RNCamera.Constants.Type.back
                }
                captureAudio={false}
                flashMode={
                  flashOn
                    ? RNCamera.Constants.FlashMode.on
                    : RNCamera.Constants.FlashMode.off
                }
                androidCameraPermissionOptions={{
                  title: 'Permission to use camera',
                  message: 'We need your permission to use your camera',
                  buttonPositive: 'Ok',
                  buttonNegative: 'Cancel',
                }}>
                {({camera, status}) => {
                  if (status !== 'READY') {
                    return <ActivityIndicator color={colors.primary} />;
                  }
                  return (
                    <>
                      <View style={styles.containerBotaoFechar}>
                        <TouchableOpacity
                          onPress={() => cancelar()}
                          style={styles.botao}>
                          <Icon
                            style={{color: colors.primary}}
                            name="close"
                            size={25}
                            color="#000"
                          />
                        </TouchableOpacity>
                      </View>
                      <View style={styles.containerBotao}>
                        <View style={styles.viewBotao}>
                          <TouchableOpacity
                            onPress={() => setCamSelfie(!camSelfie)}
                            style={styles.botao}>
                            <Icon
                              style={{color: colors.primary}}
                              name="repeat"
                              size={25}
                              color="#000"
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.viewBotao}>
                          <TouchableOpacity
                            onPress={() => tirarFoto(camera)}
                            style={styles.botaoPrincipal}>
                            <Icon
                              style={{color: colors.secundary}}
                              name="camera"
                              size={25}
                              color="#000"
                            />
                          </TouchableOpacity>
                        </View>
                        <View style={styles.viewBotao}>
                          <TouchableOpacity
                            onPress={() => setFlashOn(!flashOn)}
                            style={styles.botao}>
                            <Icon
                              style={{color: colors.primary}}
                              name={flashOn ? 'flash-outline' : 'flash'}
                              size={25}
                              color="#000"
                            />
                          </TouchableOpacity>
                        </View>
                      </View>
                    </>
                  );
                }}
              </RNCamera>
            )}
          </View>
        </Modal>
      ) : null}
    </>
  );
}

export default Camera;
