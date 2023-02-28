import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity
} from 'react-native';
import startScreenImage from '../assets/startupscreenimage.png';

function StartScreen({ navigation }) {
    return (
      <View style={styles.startScreenBackground}>
        <Image source={startScreenImage} style={{marginTop:-20}}/>
        <Text style={styles.startScreenHeading}>
          Join us to start your Journey!!!
        </Text>
        <Text style={styles.startScreenSubheading}>
          Choose your desired preference
        </Text>
        <TouchableOpacity
          style={styles.startScreenButton}
          onPress={() => navigation.navigate('Admin SignIn')}>
          <Text style={styles.startScreenButtonText}>ADMIN</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.startScreenButton}
          onPress={() => {}}>
          <Text style={styles.startScreenButtonText}>DOCTOR</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.startScreenButton}
          onPress={() => {}}>
          <Text style={styles.startScreenButtonText}>NURSE</Text>
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.startScreenButton}
          onPress={() => {}}>
          <Text style={styles.startScreenButtonText}>PATIENT</Text>
        </TouchableOpacity>
      </View>
    );
}

const styles = StyleSheet.create({
    startScreenBackground: {
      flex: 1,
      backgroundColor: 'white',
    },
    startScreenHeading: {
      fontFamily: 'Alata-Regular',
      fontSize: 25,
      alignSelf: 'center',
      marginTop: 15,
    },
    startScreenSubheading: {
      alignSelf: 'center',
      marginTop: 10,
      fontSize: 20,
    },
    startScreenButton: {
      alignSelf: 'center',
      width: Dimensions.get('window').width * 0.6,
      height: 50,
      backgroundColor: 'rgb(59, 172, 182)',
      marginTop: 20,
      borderRadius: 15,
    },
    startScreenButtonText: {
      alignSelf: 'center',
      fontFamily: 'Alata-Regular',
      padding: 8,
      fontSize: 22,
    },
});

export default StartScreen;
  