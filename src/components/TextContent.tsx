import React from 'react';
import {View, Text} from 'react-native';

type Props = {
  value: string;
  color: string;
  fontFamily: string;
  fontSize: number;
  fontWeight: string | number;
  marginLeft: number;
  marginRight: number;
  marginTop: number;
  marginBottom: number;
  padding: number;
};

const TextContent = ({
  value,
  color,
  fontFamily,
  fontSize,
  fontWeight,
  marginRight,
  marginLeft,
  marginBottom,
  marginTop,
  padding,
}: Props) => {
  const styles: {} = {
    color: color,
    fontFamily: fontFamily,
    fontSize: fontSize,
    fontWeight: fontWeight,
    marginRight: marginRight,
    marginLeft: marginLeft,
    marginTop: marginTop,
    marginBottom: marginBottom,
    padding,
  };
  return (
    <View>
      <Text style={styles}>{value}</Text>
    </View>
  );
};

export default TextContent;
