import React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image
} from 'react-native';
import logo from '../assets/logo.png';

function SplashScreen({navigation}) {
  React.useEffect(()=>{
    setTimeout(() => {
      navigation.navigate('Start Screen')
    },3000);
  },[]);
    return (
      <View style={styles.splashBackground}>
        <View style={styles.splashCircle}>
          <Image source={logo} style={styles.logoStyle} />
        </View>
        <View>
          <Text style={styles.splashHeading}>eHOSPITAL</Text>
          <Text style={styles.splashSubheading}>
            We Work for Complete Healing
          </Text>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    splashBackground: {
      flex: 1,
      backgroundColor: '#3BACB6',
      flexDirection: 'row',
    },
    splashCircle: {
      height: 100,
      width: 100,
      borderRadius: 50,
      backgroundColor: 'white',
      marginLeft: Dimensions.get('window').width * 0.1,
      borderWidth: 2,
      borderColor: 'white',
      marginTop: Dimensions.get('window').height * 0.47,
    },
    logoStyle: {
      height: 120,
      width: 120,
      alignSelf: 'center',
      marginTop: -10,
    },
    splashHeading: {
      fontSize: 35,
      fontWeight: 'bold',
      fontFamily: 'Alata-Regular',
      color: '#B3E8E5',
      marginTop: Dimensions.get('window').height * 0.5,
      marginLeft: Dimensions.get('window').width * 0.02,
    },
    splashSubheading: {
      fontFamily: 'Times New Roman',
      fontSize: 13,
      fontWeight: 'bold',
      marginLeft: Dimensions.get('window').width * 0.02,
    },
});

export default SplashScreen;