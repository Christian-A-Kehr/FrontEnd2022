import React, { useState } from "react"
import { View, Button, Text, StyleSheet } from "react-native"
import * as APIS from '../../apiManager/API'

const Demo = () => {
  const [populateMsg, setpoppulateMsg] = useState<string>('Database not populated')
  const [guard, setGuard] = useState<boolean>(false)
  const [allowPoulation, setAllowPoulation] = useState<boolean>(true)
  const [subject, setSubject] = useState('')
  const [description, setDscribtion] = useState('')
  const [attachment, setAttachment] = useState('')
  const [sender, setSender] = useState('')
  const [receiver, setReciver] = useState('')

  const populate = () => {

    if (!guard) {
      populateDatabase()
      setpoppulateMsg('Database populated');
      setGuard(true);
    }
    else {
      setpoppulateMsg('Database already populated');
      setAllowPoulation(false);
    }
  }

  const getRequest = () => {
    const url = APIS.GetRequestById + 2
    fetch(url).then((res) => res.json())
      .then((resJson) => {
        setDscribtion(resJson.requestDescription)
        setSubject(resJson.requestSubject)
        setAttachment(resJson.requestAttachment)
        setReciver(resJson.requestReceiver)
        setSender(resJson.requestSender)
      }).catch((error) => {
        console.error(error);
      });
  };
  const populateDatabase = () => {
    const url = 'http://192.168.1.95:8080/Hovedopgave/api/request/dummy'
    fetch(url).then((res) => res.json())
      .then((resJson) => {
      }).catch((error) => {
        setpoppulateMsg('Error');
        setAllowPoulation(false);

      });
  };

  const spacing = ' '
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <View style={styles.padding}>
          <Button title='Populate database' onPress={populate} disabled={!allowPoulation}></Button>
        </View>
        <View>
          <Button title='Show Request' onPress={getRequest}></Button>
        </View>
      </View>
      <Text style={styles.text}>{populateMsg}</Text>
      <View>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            Subject: {spacing}
          </Text>
          <Text>{description}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            Description:{spacing}
          </Text>
          <Text >{subject}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            Attachment: {spacing}
          </Text>
          <Text>{attachment}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            Sender: {spacing}
          </Text>
          <Text>{sender}</Text>
        </View>
        <View style={styles.textRow}>
          <Text style={styles.text}>
            Receiver:{spacing}
          </Text>
          <Text>{receiver}</Text>
        </View>
      </View>

    </View>
  )

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    margin: '5%',
  },

  row: {
    flexDirection: 'row',
    paddingBottom: '5%'

  },
  padding: {
    paddingEnd: '10%',
  },
  text: {
    fontWeight: 'bold',
    paddingBottom: '1%'
  },
  textRow: {
    flexDirection: 'row',
    paddingBottom: '0.5%'

  },
});

export default Demo