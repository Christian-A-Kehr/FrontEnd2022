import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ImageBackground,
  Button,
  TextInput,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { ImageBackgroundPic } from '../assets/images/ImagesHolder';

import { black, greenTheme, transparent, white, whiteOpacity30 } from '../utils/constants/colors';
import { requestTypes } from '../constants/requestTypes';
import Travel from '../components/requests/Travel';
import CustomButton from '../elements/buttons/CustomButton';
import Attachments from '../components/requests/Attacments';
import EventsRequest from '../components/requests/EventRequest';
import RequestTypeModal from '../elements/modals/RequestTypeModal';
import RequestDepartments from '../elements/modals/RequestDepartments';

export default function Requests() {
  const [selectedType, setSelectedType] = useState('Select type');
  const [openType, setOpenType] = useState(false)
  const [location, setLocation] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [startsDate, setStartsDate] = useState<Date>(new Date());
  const [endDate, setEndDate] = useState<Date>(new Date());
  const [department, setDepartment] = useState<string>('Select department')

  const sendRequest = () => {
    // open model with information and confirm
    const [location, setLocation] = useState<string>('');

    // requestSender(selectedType, startsDate, location, endDate, destination)

  }

  const rendertype = () => {
    if (selectedType === 'Travel') {
      return (
        <Travel />
      )
    }
    if (selectedType === 'Event') {
      return (
        <EventsRequest />
      )
    }
  };

  const chosePDF = () => {
    // indset funtionality for PDF
  };

  const choseCamera = () => {
    // indset funtionality for camera
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.bg}
        source={{
          uri: ImageBackgroundPic
        }}
      >
        <View style={styles.content}>
          <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container2}
          >
            <ScrollView>
              <View style={styles.selectTypeContainer}>
                <Text style={styles.headerText}> Request type</Text>
                <RequestTypeModal
                  ButtonTitle={selectedType}
                  Travel={setSelectedType}
                  Board={setSelectedType}
                  Lodging={setSelectedType}
                  Event={setSelectedType} />
              </View>
              <View style={styles.typeContainer}>
                {rendertype()}
              </View>
              <View style={styles.attachments}>
                <Text style={styles.headerText}>Posting Text</Text>
                <TextInput style={styles.postingInput}
                  placeholder='Description'
                />
                <Text style={styles.headerText}>Documentation</Text>
                <View>
                  <Attachments
                    pdfChoise={() => chosePDF()}
                    cameraChoise={() => choseCamera()} />
                </View>
              </View>
              <View style={styles.sendContainer}>
                <Text style={styles.headerText}>Send request to</Text>
                <RequestDepartments
                  ChosenDepartment={department}
                  DepartmentOne={() => setDepartment('Acounting')}
                  DepartmentTwo={() => setDepartment('Marketing')}
                  DepartmentThree={() => setDepartment('Design')}
                  DepartmentFour={() => setDepartment('Support')}
                />
                <CustomButton onPressButton={sendRequest} viewStyle={styles.button} textStyle={styles.headerText} buttonText={'Send Request'} />
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </View>

      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    flex: 1,
  },
  bg: {
    width: '100 %',
    height: '100 %',
  },
  content: {
    flex: 1,
    backgroundColor: whiteOpacity30,
  },
  selectTypeContainer: {
    flex: 1,
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  typeContainer: {
    flex: 1.5,
    //backgroundColor: 'blue',
  },
  attachments: {
    flex: 2,
    //backgroundColor: 'red',
    alignItems: 'center',

  },

  postingInput: {
    backgroundColor: white,
    color: black,
    width: '80%',
    borderRadius: 10,
    textAlign: 'center',
    margin: 5,
    height: '20%',
    padding: 10,

  },
  sendContainer: {
    flex: 1.5,
    //backgroundColor: 'green',
    alignItems: 'center',
    paddingVertical: 40,
    justifyContent: 'space-between',
    margin: 2
  },
  headerText: {
    color: white,
    fontSize: 17,
    fontWeight: 'bold',
    padding: 7,
  },
  dropdown: {
    backgroundColor: transparent,
    borderColor: transparent,
    width: '70%',
    alignItems: 'center',
  },
  dropdownContainer: {
    alignItems: 'center',
    width: '50%',
  },
  dropdownContent: {
    borderColor: transparent,
    //backgroundColor: veryDarkDesaturatedPinkOpacity10,
    width: '60%',
    justifyContent: 'center',
  },
  dropdownText: {
    color: white,
  },
  button: {
    backgroundColor: greenTheme,
    borderRadius: 10,
    width: 150,
    height: '50%',
    alignItems: 'center',
    justifyContent: 'center'
  },

});


function chosePDF(): void {
  throw new Error('Function not implemented.');
}
/* 
<DropDownPicker
            open={open}
            setOpen={setOpen}
            items={requestTypes}
          
            zIndex={1}
            zIndexInverse={2}
          />
*/