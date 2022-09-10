import React from 'react';
import {View, TextInput} from 'react-native';

type Props = {
  value: string | number;
  placeholder: string;
  color: string;
  width: number;
  height: number;
  backgroundColor: string;
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
  secureTextEntry: boolean;
  borderWidth: number;
  borderColor: string;
  borderRadius: number;
  opacity: number;
  textContentType: string;
  onChangeText: (text: any) => void;
};

const Input = ({
  value,
  placeholder,
  color,
  backgroundColor,
  height,
  width,
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
  secureTextEntry,
  borderWidth,
  borderColor,
  borderRadius,
  opacity,
  textContentType,
  onChangeText,
}: Props) => {
  const styles: {} = {
    backgroundColor: backgroundColor,
    height: height,
    width: width,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    marginLeft: marginLeft,
    marginRight: marginRight,
    marginBottom: marginBottom,
    marginTop: marginTop,
    padding: padding,
    paddingTop: paddingTop,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingBottom: paddingBottom,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    opacity: opacity,
  };
  return (
    <View>
      <TextInput
        value={value}
        placeholder={placeholder}
        style={styles}
        placeholderTextColor={color}
        secureTextEntry={secureTextEntry}
        onChangeText={onChangeText}
        textContentType={textContentType}
      />
    </View>
  );
};

export default Input;
