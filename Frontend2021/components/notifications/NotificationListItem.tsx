import React from 'react';
import {
  View, StyleSheet, GestureResponderEvent, TouchableOpacity, Image, Text
} from 'react-native';


import {
  white, veryDarkPink, veryDarkDesaturatedPink, darkGrayishRed,
} from '../../utils/constants/colors';

type Props = {
  sender: string;
  text: string;
  time: string;
  image: string;
  is_seen: boolean;
  onPressNotification: (event: GestureResponderEvent) => void;
};

const NotificationListItem: React.FC<Props> = ({
  sender, text, time, image, is_seen, onPressNotification,
}: Props) => {
  const colorSelect = is_seen ? styles.isSeen : styles.isNotSeen;

  const renderText = () => {
    if (is_seen) {
      return (
        <View style={styles.textContainer}>
          <Text
            style={[styles.generalText, styles.senderStyling, styles.darkGray2ColorIsSeen]}
          >
            {sender}
          </Text>
          <Text
            numberOfLines={2}
            style={[styles.generalText, styles.textPreview, styles.darkGray2ColorIsSeen]}
          >
            {text}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.textContainer}>
        <Text
          style={[styles.generalText, styles.senderStyling, styles.textColorIsNotSeen]}
          
        >
          {sender}
        </Text>
        <Text
          numberOfLines={2}
          style={[styles.generalText, styles.textPreview, styles.textColorIsNotSeen]}
          
        >
          {text}
        </Text>
      </View>
    );
  };

  const renderTime = () => {
    if (is_seen) {
      return (
        <View style={styles.timestampContainer}>
          <Text
            style={[styles.darkGray2, styles.darkGray2ColorIsSeen]}
          >
            {time}
          </Text>
        </View>
      );
    }
    return (
      <View style={styles.timestampContainer}>
        <Text
          style={[styles.darkGray2, styles.textColorIsNotSeen]}
          
        >
          {time}
        </Text>
      </View>
    );
  };

  return (
    <View style={[styles.notificationItem, colorSelect]}>
      <TouchableOpacity onPress={onPressNotification}>
        <View style={styles.contentContainer}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.imageStyle}
              source={{ uri: image }}
            />
          </View>
          {renderText()}
          {renderTime()}
        </View>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  notificationItem: {
    width: '97%',
    height: 96,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: '3%',
    borderRadius: 10,
    borderWidth: 1,
    marginVertical: '1%',
  },
  contentContainer: {
    flexDirection: 'row',
  },
  imageContainer: {
    width: '20%',
    marginRight: '5%',
  },
  textContainer: {
    width: '60%',
    justifyContent: 'center',
  },
  timestampContainer: {
    width: '10%',
    marginLeft: '5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  isSeen: {
    backgroundColor: white,
    borderBottomColor: veryDarkPink,
    borderBottomWidth: 0.3,
  },
  isNotSeen: {
    backgroundColor: '#CBF3CB',
    borderBottomColor: white,
    borderBottomWidth: 0.3,
  },
  imageStyle: {
    padding: 30,
    width: 80,
    height: 80,
    overflow: 'hidden',
    borderRadius: 150 / 2,
    justifyContent: 'space-around',
  },
  textHandler: {
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    flexDirection: 'column',
    paddingLeft: 30,
  },
  generalText: {
    lineHeight: 17,
    letterSpacing: 1,
    fontWeight: '700',
  },
  senderStyling: {
    fontSize: 17,
  },
  textColorIsNotSeen: {
    color: 'black',
  },
  textPreview: {
    fontSize: 11,
    lineHeight: 17,
    letterSpacing: 1,
  },
  dateStyling: {
    width: '10%',
    alignItems: 'center',
    textAlign: 'right',
  },
  darkGray2: {
    fontSize: 10,
    lineHeight: 10.8,
    letterSpacing: 1,
    fontWeight: '600'
  },
  darkGray2ColorIsSeen: {
    color: darkGrayishRed,
  },
});

export default NotificationListItem;
