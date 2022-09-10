import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {TextContent, Input, Button} from '../components';
import Logo from '../assets/deal.png';
import {useNavigation} from '@react-navigation/native';

const screenWidth = Dimensions.get('screen').width;
const screenHeight = Dimensions.get('screen').height;

export const Login = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextContent
        value="Lend$$Buddy"
        color="#000"
        fontSize={35}
        fontWeight="700"
        marginTop={30}
        marginBottom={35}
      />
      <Input
        placeholder="Email"
        color="#000"
        backgroundColor="#EEF1F6"
        width={screenWidth * 0.9}
        height={screenHeight / 15}
        paddingLeft={10}
        borderRadius={5}
        marginBottom={25}
        textContentType="emailAddress"
      />
      <Input
        placeholder="Password"
        color="#000"
        backgroundColor="#EEF1F6"
        width={screenWidth * 0.9}
        height={screenHeight / 15}
        paddingLeft={10}
        borderRadius={5}
        marginBottom={10}
        secureTextEntry
      />
      <Button
        title="Forgot Password?"
        marginBottom={10}
        color="#000"
        fontWeight="bold"
        marginLeft={screenWidth / 2}
      />
      <Image style={styles.image} source={Logo} />
      <Button
        title="Login"
        backgroundColor="#28a745"
        color="#fff"
        fontWeight="bold"
        width={screenWidth * 0.9}
        height={screenHeight / 15}
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        marginBottom={10}
      />
      <TextContent value="Or" marginBottom={10} />
      <Button
        title="Create an account"
        backgroundColor="#EEF1F6"
        color="#000"
        width={screenWidth * 0.9}
        height={screenHeight / 15}
        borderRadius={5}
        alignItems="center"
        justifyContent="center"
        fontWeight="bold"
        marginBottom={5}
        onPress={() => navigation.navigate('SignUp')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: screenWidth * 0.9,
    height: screenHeight / 3.5,
    marginBottom: 10,
    borderRadius: 5,
  },
});

export default Login;
