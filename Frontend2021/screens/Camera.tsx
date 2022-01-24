import React from 'react';
import { ImageBackground, StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import ImagePicker from '../components/diviceFeaturs/imagePicker';
import { greenTheme } from '../utils/constants/colors';
import { CameraBackgroundPic } from '../assets/images/ImagesHolder';


export default function Camera() {
  return (

    <View style={styles.container}>

      <View style={styles.cameraContianer}>
        <ImageBackground
          style={styles.bg}
          source={{
            uri: CameraBackgroundPic
          }}
        >
          <ImagePicker />
        </ImageBackground>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bg: {
    width: '100 %',
    height: '100 %',
    paddingBottom: 235

  },
  cameraContianer: {
    flex: 1,
    width: '80%',
    marginTop: 20,

  },
});
