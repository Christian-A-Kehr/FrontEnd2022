import React from "react";
import { GestureResponderEvent, View, StyleSheet, TouchableOpacity, Text } from "react-native";
import { white } from "../../utils/constants/colors";
import { Entypo } from '@expo/vector-icons';

type Props = {
  pdfChoise: (event: GestureResponderEvent) => void;
  cameraChoise: (event: GestureResponderEvent) => void;
}

const Attachments: React.FC<Props> = ({ pdfChoise, cameraChoise }: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity onPress={pdfChoise}>
          <View style={styles.buttonSpace}>
            <Entypo name="attachment" size={24} color="black" />
            <Text>Attach PDF</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View>
        <TouchableOpacity onPress={cameraChoise}>
          <View style={styles.buttonSpace}>
            <Entypo name="camera" size={24} color="black" />
            <Text>Attach Picture</Text>
          </View>
        </TouchableOpacity>
      </View>

    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 50,
    backgroundColor: white,
    width: '90%',
    height: '70%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1
  },
  buttonSpace: {
    alignItems: 'center',


  },
})

export default Attachments