import React from "react";
import {View, Text, TouchableOpacity, GestureResponderEvent, StyleSheet, StyleProp, ViewStyle, TextStyle, ImageBackground} from 'react-native'
import { white } from "../../utils/constants/colors";

type Props = {
  onPressButton: (event: GestureResponderEvent) => void;
  viewStyle: StyleProp<ViewStyle>
  textStyle: StyleProp<TextStyle>
  buttonText: string
}

const CustomButton: React.FC<Props> = ({onPressButton, buttonText, viewStyle, textStyle}: Props) => {

  return (
    <TouchableOpacity onPress={onPressButton}>
      <View style={viewStyle}>
        <Text style={textStyle}>
        {buttonText}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

export default CustomButton