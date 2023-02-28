import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  Modal
} from 'react-native';
import checked from '../assets/checked.png';
import {auth, database} from '../firebase';
import { useFocusEffect } from '@react-navigation/native';


function ManageAppointments({navigation,route}){
  
  const [appointments, setAppointment] = React.useState([]);

      React.useEffect(() => {
        database.ref('/appointment').on('value', parentsnap => {
          const Alldata = [];
          parentsnap.forEach(childsnap => {
            const key = childsnap.key;
      
            const {date, doctorName, fees, patientName, reason,time} = childsnap.val();
            const obj = {date:date, doctorName:doctorName, fees:fees, patientName:patientName, reason:reason, time:time, keys:key};
      
            console.log(obj)
      
            Alldata.push(obj);
          });
          console.log(Alldata)
          setAppointment(Alldata);
        });
       
      }, []);
    


  const deleteItem = key => {
    database.ref('/appointment/' + key).remove();
  };
  
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [name, setName] = React.useState('')
    return(
        <SafeAreaView style={{height:Dimensions.get('window').height*0.7, marginTop:15}}>
          <StatusBar backgroundColor='#4bb3bc'></StatusBar>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.deleteHeading}>Deleted Successfully!!!</Text>
            <Text style={styles.deleteSubheading}>{name}'s record has been deleted Successfully</Text>
            <TouchableOpacity style={{marginTop:30}}onPress={()=>{setModalVisible(false)}}>
              <Image source={checked} style={{width:40,height:40}}/>
            </TouchableOpacity>
          </View>  
          </View></Modal>
          <FlatList
            data={appointments}
            renderItem={
              ({ item }) => (
                <TouchableOpacity style={styles.container} onPress={()=> navigation.navigate('ViewAppointment',{data:item})}>
                  <View style={{flexDirection:'row'}}>
                    <View style={[styles.image]}>
                      <Text style={styles.dateDayText}></Text>
                      <Text style={styles.dateDayText}></Text>
                    </View>
                    <View>
                      <Text style={styles.docName}>Doctor: {item.doctorName}</Text>
                      <Text style={styles.docSpecial}>Patient: {item.patientName}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <TouchableOpacity style={styles.deletebutton}
                      onPress={() => {
                        deleteItem(item.keys)
                        setName(item.patientName),
                        setModalVisible(true)
                      }}
                      >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  
                </TouchableOpacity>
                
              )}
            keyExtractor={(item) => item.id}
            
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('window').width * 0.85,
    height: 110,
    borderRadius:9,
    borderColor: '#82DBD8',
    backgroundColor:'#cdf1ef',
    marginTop:30,
    backgroundColor:'#cdf1ef',
    borderWidth:2,
    alignSelf:'center',
  },
  image:{
    width:52,
    height:53,
    borderWidth:2,
    borderColor: '#2f8f9d',
    backgroundColor:'#2f8f9d',
    margin:15
  },
  docName:{
    fontSize:17,
    fontFamily:'times',
    color:'black',
    marginTop:10,
    fontWeight:'bold'
  },
  docSpecial:{
    fontSize:17,
    color:'black',
    fontFamily:'times',
    fontWeight:'bold'
  },
  docExp:{
    fontSize:14,
    color:'black',
    fontFamily:'times'
  },
  docTime:{
    fontSize:14,
    color:'black',
    fontFamily:'times',
    marginLeft:15
  },
  buttonText:{
    color:'white',
    fontSize:15,
    fontFamily:'times',
    fontWeight:'bold',
    textAlign:'center',
    padding:3
  },
  editbutton:{
    height:27,
    width:81,
    alignContent:'center',
    color:'white',
    fontSize:14,
    fontFamily:'times',
    fontWeight:'bold',
    backgroundColor:'#2f8f9d',
    borderColor: '#2f8f9d',
    marginLeft:110,
    marginTop:-15,
    borderRadius:7
  },
  deletebutton:{
    eight:27,
    width:81,
    alignContent:'center',
    color:'white',
    fontSize:14,
    fontFamily:'times',
    fontWeight:'bold',
    backgroundColor:'#D10000',
    borderColor: '#D10000',
    marginLeft:250,
    marginTop:-15,
    borderRadius:7
  },
  modalBackground:{
    flex:1,
    backgroundColor: 'rgba(128,128,128,0.5)',
  },
  modalView: {
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    width:Dimensions.get('window').width,
    height:250,
    marginTop:Dimensions.get('window').height * 0.3
  },
  deleteHeading:{
    fontFamily:'Alata-Regular',
    fontSize:28,
    color:'#D10000'
  },
  deleteSubheading:{
    fontSize:19,
    textAlign:'center',
    marginTop:20,
    fontFamily:'times'
  },
  dateDayText:{
    color:'white',
    fontFamily:'Alata-Regular',
    fontSize:15,
    textAlign:'center'
  },
});

export default ManageAppointments;