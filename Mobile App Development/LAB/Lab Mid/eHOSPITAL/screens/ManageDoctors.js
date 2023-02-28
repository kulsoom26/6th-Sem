import * as React from 'react';
import { useEffect, useState } from 'react';
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
import doctor from '../assets/nurse.png'
import {auth, database} from '../firebase';

function ManageDoctors({navigation,route}){
  React.useEffect(() => {
    database.ref('/doctors').on('value', parentsnap => {
      const Alldata = [];
      parentsnap.forEach(childsnap => {
        const key = childsnap.key;

        const {name, dID, age, email, experience, specialization, time} = childsnap.val();
        const obj = {name: name, dID:dID, age:age, email:email, experience:experience, specialization:specialization, time:time, keys:key};

        //console.log(obj)

        Alldata.push(obj);
      });
      //console.log(Alldata)
      setDoctors(Alldata);
    });
  }, []);



  const deleteItem = key => {
    console.log('delete');
    database.ref('/doctors/' + key).remove();
  };
  
  const [doctors, setDoctors] = React.useState([]);
  
  const [modalVisible, setModalVisible] = React.useState(false);
  const [delName, setName] = React.useState('')
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
            <Text style={styles.deleteSubheading}>{delName}'s record has been deleted Successfully</Text>
            <TouchableOpacity style={{marginTop:30}}onPress={()=>{setModalVisible(false)}}>
              <Image source={checked} style={{width:40,height:40}}/>
            </TouchableOpacity>
          </View>  
          </View></Modal>
          <FlatList
            data={doctors}
            renderItem={
              ({ item }) => (
                <View style={styles.container}>
                  <View style={{flexDirection:'row'}}>
                    <Image source={doctor} style={styles.image}></Image>
                    <View>
                      <Text style={styles.docName}>{item.name}</Text>
                      <Text style={styles.docSpecial}>{item.specialization}</Text>
                      <Text style={styles.docExp}>{item.experience}</Text>
                    </View>
                  </View>
                  <Text style={{color:'#2f8f9d',fontSize:15, marginLeft:15, fontFamily:'times', fontWeight:'bold'}}>Time</Text>
                  <View style={{flexDirection:'row'}}>
                    <Text style={styles.docTime}>{item.time}</Text>
                    <TouchableOpacity 
                      style={styles.editbutton}
                      onPress={()=>{
                        navigation.navigate('EditDoctor',{data:item})
                                  }}>
                        <Text style={styles.buttonText}>Edit</Text>
                      </TouchableOpacity>
                    <TouchableOpacity style={styles.deletebutton}
                      onPress={() => {
                        deleteItem(item.keys)
                        setName(item.name),
                        setModalVisible(true)
                      }}
                      >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  
                </View>
                
              )}
            keyExtractor={(item) => item.id}
            
          />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('window').width * 0.9,
    height: 170,
    borderRadius:9,
    borderColor: '#82DBD8',
    backgroundColor:'#cdf1ef', 
    marginTop:20,
    backgroundColor:'#cdf1ef',
    borderWidth:2,
    alignSelf:'center',
  },
  image:{
    width:68,
    height:81,
    borderRadius:7,
    borderWidth:2,
    borderColor: 'gray',
    margin:15
  },
  docName:{
    fontSize:22,
    fontFamily:'Alata-Regular',
    color:'black',
    marginTop:10
  },
  docSpecial:{
    fontSize:18,
    color:'#2f8f9d',
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
    marginLeft:80,
    marginTop:-8,
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
    marginLeft:30,
    marginTop:-8,
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
});

export default ManageDoctors;