import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { white } from "../../utils/constants/colors";
import { Entypo } from '@expo/vector-icons'; 
type Props = { 
  ButtonTitle: string;
  Travel: (choice: string) => void;
  Board: (choice: string) => void;
  Lodging: (choice: string) => void;
  Event: (choice: string) => void;
} 

const RequestTypeModal: React.FC<Props> = ({ButtonTitle, Travel, Board, Lodging, Event }: Props) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.header}>Select request type</Text>
            <View> 
            <Text style={styles.modalText}>Travel: car, bus, plane or train</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => { setModalVisible(!modalVisible); Travel('Travel') }}
            >
              <Text style={styles.textStyle}>Travel</Text>
            </Pressable>
            </View>
            <View> 
            <Text style={styles.modalText}>Board: food and drinks </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); Board('Board')}} 
              >
              <Text style={styles.textStyle}>Board</Text>
            </Pressable>
            </View>
            <View> 
            <Text style={styles.modalText}>Lodging: hotels and BnB </Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); Lodging('Lodging')}}
            >
              <Text style={styles.textStyle}>Lodging</Text>
            </Pressable>
            </View>
            <View> 
            <Text style={styles.modalText}>Events: teambuilding events</Text>
            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => {setModalVisible(!modalVisible); Event('Event')}}
            >
              <Text style={styles.textStyle}>Events</Text>
            </Pressable>
            </View>
          </View>
          
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{ButtonTitle}</Text>
        <Entypo name="chevron-small-down" size={24} color="black" />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
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
    flexDirection: 'row'
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
  }
});

export default RequestTypeModal;