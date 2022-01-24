import React, { useEffect, useState } from 'react';
import { Button, StyleSheet } from 'react-native';
import { useSelector } from 'react-redux';

import { Text, View, Image } from 'react-native';
import ConfirmInput from '../elements/modals/ConfirmInput';
import * as APIS from './../apiManager/API'
import { REMINDERS } from 'expo-permissions';
import Demo from '../components/settings/Demo';
import { greenTheme } from '../utils/constants/colors';

export default function Settings() {
  const [name, setName] = useState<string>('Chuck Norris')
  const [demo, setDemo] = useState<boolean>(false)

  const renderContent = () => {
    if (!demo) {
      return (
        <View style={styles.editContainer}>
          <Text style={styles.title}>Edit profile</Text>
          <ConfirmInput Changes={setName} ButtonText='Change Name' />
          <ConfirmInput Changes={setName} ButtonText='Change Picture' />
          <View style={styles.info}>
            <Text style={styles.title}>Information</Text>
            <Text> Contact an administrator if you</Text>
            <Text> need to change your email</Text>

          </View>
        </View>

      )
    } if (demo) {
      return (
        <Demo />
      )
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.profileImage} source={{ uri: 'https://images02.military.com/sites/default/files/2021-04/chucknorris.jpeg' }} />
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subText}>HeWillWriteYou@N.com</Text>
        <Text style={styles.subText}> Requester/Approver</Text>
      </View>
      <View style={styles.editContainer}>
        {renderContent()}
      </View>
      <View style={styles.demo}>
        <Button title='Demo' color={greenTheme} onPress={() => setDemo(!demo)} ></Button>
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  imageContainer: {
    flex: 2.3,
    marginTop: '0.5%',
    backgroundColor: 'lightgray',
    width: '100%',
    alignItems: 'center',
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    paddingTop: '2%'
  },
  profileImage: {
    height: 200,
    width: 200,
    borderRadius: 100,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  subText: {
    fontSize: 15
  },
  editContainer: {
    flex: 2,
    alignItems: 'center',
    marginTop: '2%',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    marginTop: '2%',
  },

  dark: { flex: 1 },
  blue: { backgroundColor: 'blue', flex: 1 },

  demo: {
    paddingBottom: 7.5
  }
});
