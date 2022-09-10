import React from 'react';
import {View, StyleSheet, ScrollView, Dimensions} from 'react-native';
import {TextContent, Input, Button} from '../components';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

const SignUp = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextContent
        value="Sign Up"
        fontSize={30}
        fontWeight="700"
        marginTop={30}
        marginBottom={35}
      />
      <ScrollView>
        <Input
          placeholder="First Name"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
        />
        <Input
          placeholder="Last Name"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
        />
        <Input
          placeholder="Address"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
        />
        <Input
          placeholder="Email"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
        />
        <Input
          placeholder="Password"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
          secureTextEntry
        />
        <Input
          placeholder="Re-enter Password"
          color="#000"
          paddingLeft={10}
          backgroundColor="#EEF1F6"
          width={screenWidth * 0.9}
          height={screenHeight / 15}
          borderRadius={5}
          marginBottom={25}
          secureTextEntry
        />
      </ScrollView>
      <Button
        title="Submit"
        backgroundColor="#28a745"
        color="#fff"
        fontWeight="bold"
        width={screenWidth * 0.9}
        height={screenHeight / 15}
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        marginBottom={100}
        onPress={() => navigation.navigate('Home')}
      />
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
