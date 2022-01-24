import React, { useState } from "react";
import { View, Button, Image, Text, StyleSheet } from "react-native";
import { greenTheme } from "../../utils/constants/colors";
import * as imagePicker from 'expo-image-picker';

const ImgPicker = props => {
  const [pickedImage, setPickedImage] = useState();

  const takeImageHandler = async () => {
    const image = await imagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
      quality: 0.5
    });
    setPickedImage(image.uri);
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!pickedImage ? (
          <Text style={styles.text}>No image</Text>
        ) : (<Image style={styles.image} source={{ uri: pickedImage }} />)}
      </View>
      <Button title="Take Image" color={greenTheme} onPress={takeImageHandler} />
      <Text style={styles.textPointerHeading}> Pointers: </Text>
      <Text style={styles.textPointers}> Remember to check edges </Text>
      <Text style={styles.textPointers}> Optimize lighting conditions </Text>
      <Text style={styles.textPointers}> Fix both elbows for stability </Text>
      <Text style={styles.textPointers}> You can always reshoot</Text>
    </View>
  )
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 300,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5

  },
  image: {
    width: '100%',
    height: '100%'
  },
  text: {
    fontWeight: 'bold',
    paddingTop: 10
  },
  textPointerHeading: {
    fontWeight: 'bold',
    fontSize: 17,
    paddingTop: 40,
    color: 'gray'
  },
  textPointers: {
    paddingBottom: 2,
    color: 'gray'


  }
});

export default ImgPicker;

/*
const verifyPermissions = async () =>{
   const {status} = await imagePicker.requestCameraPermissionsAsync();
   if (status !== 'granted'){
    Alert.alert('Insufficent permissions',
    'You need to grant camera permissions to use this app', [{text: 'Okay'}] )
    ;
    return false;
   }
   return true;
  };

  const takeImageHandler = async () => {
    const hasPermissions = await verifyPermissions();
    if (!hasPermissions) {
      return;
    }
      imagePicker.launchCameraAsync();
  };
*/