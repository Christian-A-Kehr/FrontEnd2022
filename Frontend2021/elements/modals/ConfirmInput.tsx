import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, Modal, Pressable,StyleSheet } from "react-native";
import { white } from "../../utils/constants/colors";

type Props = {
  ButtonText: string;
  Changes: (choice: string) => void;
}

const ConfirmInput: React.FC<Props> = ({Changes, ButtonText}: Props) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [changes, setChanges] = useState<string>('');
// TBD: add actions decline and confirm (pressable): setModalVisible when actions is performed (confirm must fufill Props promiss) 

  return(
    <View>
      <Modal
        animationType="slide"
        transparent={true} 
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View>
          <TextInput
          placeholder="Change  name"
          onChangeText={setChanges}
          />
        </View>
        <View style={styles.actions}>

        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{ButtonText}</Text>
      </Pressable>
    </View>
  )
};

const styles= StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    width: '80%',
    height: '60%',
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    
    padding: 10,
    elevation: 2,
    marginVertical: 2
  },
  buttonOpen: {
    backgroundColor: white,
    flexDirection: 'row',
    marginVertical: 5
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "black",
    fontWeight: "bold",
    textAlign: "center"
  },
  header: {
    fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5
  },
  modalText: {
    marginVertical: 5,
    textAlign: "center"
  },
  actions: {
    flexDirection: "row",
  },
});
export default ConfirmInput