import React, { useState } from "react";
import { View, Text ,TextInput, Platform, StyleSheet, Button, PlatformOSType } from 'react-native';
import { black, white } from "../../utils/constants/colors";

type Props= {
chosenDepartureData: (choice: Date) => void;
chosenArrivalData: (choice: Date) => void;
chosenLocationStart: (choice: String) => void;
chosenLocationEnd: (choice: String) => void;
} 

const EventsRequest: React.FC<Props> = ({}: Props ) => {
  const [amount, setAmount] = useState<number>(0);
  const [eventName, setEventName] = useState<string>('');
  const [date, setDate] = useState<Date>(new Date());

  return (
    <View style={styles.container}>
      <View style={styles.travleDataContainer}>
        <View>
          
        <Text style={ styles.title}>Event name</Text>
        <Text style={styles.title}>Date of event</Text>
        <Text style={styles.title}>Expenses</Text>
        </View>
        <View>
          
          <TextInput 
            style={[styles.textInpuntField, styles.textArears]}
            placeholder="Name"
            />
          <TextInput 
            style={[styles.textInpuntField, styles.textArears]} 
            placeholder="dd/mm/yy"
            />
            <TextInput 
            style={[styles.textInpuntField, styles.textArears]} 
            placeholder="Amount (kr)"
            keyboardType="numeric"
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
    justifyContent: 'flex-start',
    alignSelf: 'center'
  },
  textInpuntField: {
    width:'150%',
    height: '30%',
    borderRadius: 2.7,
    borderWidth: .5,
    backgroundColor: white,
    margin: 2,
    
  },
  textArears: {
    color: black,
    fontWeight: 'bold',
    fontSize: 15,
    alignSelf: "flex-start",
    textAlign: 'center',
    backgroundColor: white
  },
  title: {
    color: white,
    marginVertical: 12,
    fontWeight: 'bold',
    textAlign: 'left',
    
  }
  
})

export default EventsRequest;
