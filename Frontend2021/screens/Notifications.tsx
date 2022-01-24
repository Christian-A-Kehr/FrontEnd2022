import React from 'react';
import { View, StyleSheet } from 'react-native';


import NotificationList from '../components/notifications/NotificationList';
import NotificationListData from '../utils/dummy-data/notification/NotificationListData';
import { white } from '../utils/constants/colors';

const Notifications: React.FC = () => {
  
  return (
    <View style={styles.container}>
      <NotificationList listData={NotificationListData} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
  },
});

export default Notifications;
