import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View } from "react-native";
import { white } from "../../utils/constants/colors";
import { Entypo } from '@expo/vector-icons';
type Props = {
  ChosenDepartment: string;
  DepartmentOne: (choice: Date) => void;
  DepartmentTwo: (choice: Date) => void;
  DepartmentThree: (choice: Date) => void;
  DepartmentFour: (choice: Date) => void;
}

const RequestDepartments: React.FC<Props> = ({ ChosenDepartment, DepartmentOne, DepartmentTwo, DepartmentThree, DepartmentFour }: Props) => {
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
            <Text style={styles.header}>Select department</Text>
            <View>
              <Text style={styles.modalText}>Department 1 (Accuntion)</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  DepartmentOne
                }}
              >
                <Text style={styles.textStyle}>Acounting</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.modalText}>Department 2 (Marketing)</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  DepartmentTwo
                }}
              >
                <Text style={styles.textStyle}>Marketing</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.modalText}>Department 3 (Design)       </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  DepartmentThree
                }}
              >
                <Text style={styles.textStyle}>Design</Text>
              </Pressable>
            </View>
            <View>
              <Text style={styles.modalText}>Department 4 (Support)     </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => {
                  setModalVisible(!modalVisible)
                  DepartmentFour
                }}
              >
                <Text style={styles.textStyle}>Support</Text>
              </Pressable>
            </View>
          </View>

        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.textStyle}>{ChosenDepartment}</Text>
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
  }
});

export default RequestDepartments;