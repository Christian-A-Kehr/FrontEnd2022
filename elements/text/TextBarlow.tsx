/* eslint-disable indent */
import React, { ReactNode } from 'react';
import { Text, TextProps } from 'react-native';

interface Props extends TextProps {
  children: ReactNode
  fontWeight?: number
}

const defaultProps: { fontWeight: number } = {
  fontWeight: 0,
};

const TextBarlow: React.FC<Props> = ({
  children, fontWeight, style, ...props
} : Props) => {
  const setFontWeight = () => {
    switch (fontWeight) {
      case 100:
        return 'Barlow-Thin';
      case 200:
        return 'Barlow-ExtraLight';
      case 300:
        return 'Barlow-Light';
      case 500:
        return 'Barlow-Medium';
      case 600:
        return 'Barlow-SemiBold';
      case 700:
        return 'Barlow-Bold';
      case 800:
        return 'Barlow-ExtraBold';
      case 900:
        return 'Barlow-Black';
      default:
        return 'Barlow-Regular';
    }
  };
  return (
    <Text
      {...props}
      style={[style, { fontFamily: setFontWeight() }]}
    >
      {children}
    </Text>
  );
};

TextBarlow.defaultProps = defaultProps;

export default TextBarlow;
