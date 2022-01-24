
import React, { useEffect, useState } from "react";
import { View, Text ,TextInput, Platform, StyleSheet, Button, PlatformOSType } from 'react-native';
import { black, white } from "../../utils/constants/colors";
import moment from "moment";

type Props= {
chosenDepartureData: (choice: Date) => void;
chosenArrivalData: (choice: Date) => void;
chosenLocationStart: (choice: String) => void;
chosenLocationEnd: (choice: String) => void;
} 

const Travel: React.FC<Props> = ({chosenDepartureData, chosenArrivalData, chosenLocationStart, chosenLocationEnd }: Props ) => {
  const [location, setLocation] = useState<string>('');
  const [destination, setDestination] = useState<string>('');
  const [startsDate, setStartsDate] = useState<string>('');
  const [endDate, setEndDate] = useState<string>('');
  // implemet dates 
  
  const [show, setShow] = useState<boolean>(false);
  const [date, setDate] = useState('');
  const [currentDate, setCurrentDate] = useState('');

  useEffect(() => {   
          
      // get current time 
  
       var date = moment().utcOffset('+03:00').format('DD-MM-YYYY');
  
      // or get time ' hh:mm:ss a'
  
      setCurrentDate(date); 
   }, []);
  return (
    <View style={styles.container}>
      <View style={styles.travleDataContainer}>
        <View>
          <Text style={styles.textArears}>Departure</Text>
          <TextInput 
            style={[styles.textInpuntField, styles.textInput]}
            placeholder={currentDate}
            />
              <TextInput 
            style={[styles.textInpuntField, styles.textInput]}
            placeholder="From"
            onChangeText={setLocation}
            value={location}
            />
        </View>
        <View>
          <Text style={styles.textArears}>Arrival</Text>
          <TextInput 
            style={[styles.textInpuntField, styles.textInput]}
            placeholder="dd-mm-yyyy"
            onChangeText={setEndDate}
            value={endDate}
            keyboardType="numeric"

            />
          <TextInput 
            style={[styles.textInpuntField, styles.textInput]} 
            placeholder="Destination"
            onChangeText={setDestination}
            value={destination}
            
            />
        </View>

      </View>
    </View>
  );
};

const styles = StyleSheet.create ({
  container: {
    flex: 1,
  },
  travleDataContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  textInpuntField: {
    width:'190%',
    height: '30%',
    borderRadius: 2.7,
    borderWidth: .5,
    backgroundColor: white,
    margin: 2,
    
  },
  textArears: {
    color: white,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: "center",
    textAlign: 'center',
  },
  textInput: {
    alignSelf: "center",
    textAlign: 'center',
    color: black
  }
  
})

export default Travel;
