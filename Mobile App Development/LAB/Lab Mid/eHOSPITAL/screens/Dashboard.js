import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  SafeAreaView
} from 'react-native';
import doctorDash from '../assets/doctorDash.png';
import nurseDash from '../assets/nurseDash.png';
import patientDash from '../assets/patientDash.png';
import appointmentDash from '../assets/appointmentDash.png';
import reportDash from '../assets/reportDash.png';
import pharmacyDash from '../assets/pharmacyDash.png';
import roomDash from '../assets/roomDash.png';


function Dashboard({navigation}){
    return(
        
        <SafeAreaView style={{flex:1}}>
          <StatusBar backgroundColor='#4bb3bc'>

          </StatusBar>
          <View style={styles.ButtonView}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Doctors')}>
              <Image style={styles.image} source={doctorDash}></Image>
              <Text style={styles.buttonText}>Doctors</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Admin Root',{screen:'Nurses', initial:false})}>
              <Image style={styles.image} source={nurseDash}></Image>
              <Text style={styles.buttonText}>Nurse</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Patients')}>
              <Image style={styles.image} source={patientDash}></Image>
              <Text style={styles.buttonText}>Patients</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Appointments')}>
              <Image style={[styles.image, {width:58, height:58}]} source={appointmentDash}></Image>
              <Text style={[styles.buttonText, {fontSize:13}]}>Appointments</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.ButtonView}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Admin Root',{screen:'Reports',initial:false})}>
              <Image style={styles.image} source={reportDash}></Image>
              <Text style={styles.buttonText}>Reports</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} disabled={false} onPress={()=> navigation.navigate('Admin Root',{screen:'Room Management', initial:false})}>
              <Image style={styles.image} source={roomDash}></Image>
              <Text style={styles.buttonText}>Rooms</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.ButtonView, {justifyContent:'flex-start',marginLeft:67}]}>
            <TouchableOpacity style={styles.button} onPress={()=> navigation.navigate('Pharmacy')}>
              <Image style={styles.image} source={pharmacyDash}></Image>
              <Text style={styles.buttonText}>Pharmacy</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  ButtonView:{
    flexDirection:'row',
    alignContent:'center',
    justifyContent:'space-evenly'
  },
  button:{
    width:107,
    height: 105,
    borderRadius:8,
    borderWidth:2,
    borderColor: '#82DBD8',
    backgroundColor:'#cdf1ef',
    marginTop:25,
    elevation:20,
    shadowColor: '#171717',
    shadowOffset: {width: -2, height: 4},   
    shadowOpacity: 0.2,  
    shadowRadius: 3,  
  },
  image:{
    alignSelf:'center',
    justifyContent:'center',
    width:60,
    height:60,
    marginTop:10
  },
  buttonText:{
    alignSelf:'center',
    justifyContent:'center',
    fontFamily:'times',
    fontWeight:'bold',
    fontSize:15
  },

});

export default Dashboard;