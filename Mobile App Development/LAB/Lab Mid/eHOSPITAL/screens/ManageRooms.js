import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  StatusBar
} from 'react-native';
import ward from '../assets/Ward.jpg';
import operation from '../assets/operation.jpg';
import procedure from '../assets/Procedure.jpg';
import emergency from '../assets/emergency.jpg';
import children from '../assets/children.jpg';
import cafe from '../assets/cafe.jpg';
import lab from '../assets/lab.jpg';
import dentist from '../assets/dentist.jpg'

function ManageRooms({navigation}){
    return(
        <SafeAreaView style={{flex:1}}>
          <StatusBar backgroundColor='#4bb3bc'></StatusBar>
          <ScrollView>
            <View style={styles.container}>
              <Image source={emergency} style={styles.picture}/>
              <Image source={ward} style={styles.picture}/>
            </View>
            <View style={[styles.container,{marginTop:10}]}>
              <Text style={[styles.caption,{marginLeft:-20}]}>Emergency</Text>
              <Text style={[styles.caption,{marginLeft:40}]}>Ward</Text>
            </View>
            <View style={styles.container}>
              <Image source={dentist} style={styles.picture}/>
              <Image source={procedure} style={styles.picture}/>
            </View>
            <View style={[styles.container,{marginTop:10}]}>
              <Text style={[styles.caption,{marginLeft:50}]}>Dentist</Text>
              <Text style={[styles.caption,{marginLeft:50}]}>Procedure Rooms</Text>
            </View>
            <View style={styles.container}>
              <Image source={operation} style={styles.picture}/>
              <Image source={lab} style={styles.picture}/>
            </View>
            <View style={[styles.container,{marginTop:10}]}>
              <Text style={[styles.caption,{marginLeft:-40}]}>Operation Theater</Text>
              <Text style={styles.caption}>Labortary</Text>
            </View>
            <View style={styles.container}>
              <Image source={children} style={styles.picture}/>
              <Image source={cafe} style={styles.picture}/>
            </View>
            <View style={[styles.container,{marginTop:10}]}>
              <Text style={[styles.caption,{marginLeft:-40}]}>Children Ward</Text>
              <Text style={styles.caption}>Cafe</Text>
            </View>
          </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    marginTop:30,
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  picture:{
    width:150,
    height:150,
    borderWidth:3,
    borderColor:'#2f8f9d',
    borderRadius:8
  },
  caption:{
    color:'#2f8f9d',
    fontFamily:'Alata-Regular',
    fontSize:19
  },
});


export default ManageRooms;