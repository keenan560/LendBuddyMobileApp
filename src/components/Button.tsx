import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

type Props = {
  title: string;
  color: string;
  backgroundColor: string;
  width: number;
  height: number;
  fontFamily: string;
  fontSize: number;
  fontWeight: string | number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  padding: number;
  paddingTop: number;
  paddingBottom: number;
  paddingLeft: number;
  paddingRight: number;
  textAlign: string;
  justifyContent: string;
  alignItems: string;
  borderRadius: string;
  opacity: number;
  onPress: (event: any) => void;
};

const Button = ({
  title,
  color,
  width,
  height,
  backgroundColor,
  fontFamily,
  fontSize,
  fontWeight,
  marginLeft,
  marginRight,
  marginTop,
  marginBottom,
  padding,
  paddingTop,
  paddingBottom,
  paddingLeft,
  paddingRight,
  alignItems,
  justifyContent,
  borderRadius,
  opacity,
  onPress,
}: Props) => {
  const textStyle: {} = {
    color: color,
    fontSize: fontSize,
    fontWeight: fontWeight,
    fontFamily: fontFamily,
  };
  const buttonStyle: {} = {
    alignItems: alignItems,
    justifyContent: justifyContent,
    backgroundColor: backgroundColor,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginTop: marginTop,
    marginBottom: marginBottom,
    padding: padding,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
    paddingBottom: paddingBottom,
    width: width,
    height: height,
    borderRadius: borderRadius,
    opacity: opacity,
  };
  return (
    <View>
      <TouchableOpacity style={buttonStyle} onPress={onPress}>
        <Text style={textStyle}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
