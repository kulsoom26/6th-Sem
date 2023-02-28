import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
    ScrollView,
    FlatList,
    StatusBar,
    Modal
} from 'react-native';
import {StackActions, useNavigation, validatePathConfig } from '@react-navigation/native';
import gallery from '../assets/gallery.png';
import patientPic from '../assets/patient.png'
import {auth, database} from '../firebase';
import checked from '../assets/checked.png';


function AddPatient({navigation}){
  const [patient, setPatient] = React.useState([
    {
        id: '',
        patientName: '',
        contact: '',
        gender: '',
        age: '',
        address: '',
        DOB: '',
    }
  ]);
  const [modalVisible, setModalVisible] = React.useState(false);
  const addpost = () => {
    database.ref('/patients').push({
                patientName: patient.patientName,
                contact: patient.contact,
                gender: patient.gender,
                age: patient.age,
                address: patient.address,
                DOB: patient.DOB,
                
    });
    setPatient('')
    setModalVisible(true)

  };

  const validate = () =>{
    if(patient.patientName ===''|| patient.age === ''|| patient.contact === '' || patient.gender === ''|| patient.address === ''|| patient.DOB === ''){
        return true
    }
    else{
        return false
    }
  }
    return(
        <SafeAreaView>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text style={styles.deleteHeading}>Added Successfully!!!</Text>
                <Text style={styles.deleteSubheading}>Record has been added Successfully</Text>
                <TouchableOpacity style={{marginTop:30}}onPress={()=>{setModalVisible(false)
                 navigation.navigate('Patients');
                 navigation.dispatch(
                     StackActions.replace('Dashboard')
                 );
                }}>
                <Image source={checked} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </View>  
            </View></Modal>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Add Information</Text>
                <Image style={styles.image} source={patientPic}/>
                <TouchableOpacity style={styles.galleryButton}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Image source={gallery} style={styles.galleryIcon}/>
                        <Text style={styles.galleryText}>Choose a picture from library</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput 
                        value={patient.patientName}
                        placeholder='Enter Name'
                        onChangeText={(text) => setPatient({ ...patient, patientName: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Contact No: </Text>
                    <TextInput 
                        value={patient.contact}
                        placeholder='Enter Patient Contact'
                        onChangeText={(text) => setPatient({ ...patient, contact: text })}
                        style={[styles.input,{width:180}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Gender: </Text>
                    <TextInput 
                        value={patient.gender}
                        placeholder='Enter gender'
                        onChangeText={(text) => setPatient({ ...patient, gender: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Age: </Text>
                    <TextInput 
                        value={patient.age}
                        placeholder='Enter age'
                        onChangeText={(text) => setPatient({ ...patient, age: text })}
                        style={[styles.input,{width:237}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Address: </Text>
                    <TextInput 
                        multiline={true}
                        value={patient.address}
                        placeholder='Enter address'
                        onChangeText={(text) => setPatient({ ...patient, address:text })}
                        style={[styles.input,{width:220,height:70}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>DOB: </Text>
                    <TextInput 
                        value={patient.DOB}
                        placeholder='Enter date of birth'
                        onChangeText={(text) => setPatient({ ...patient, DOB: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                </View>
                <TouchableOpacity 
                     disabled={validate()}
                     onPress={addpost}
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>ADD PATIENT</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop: 10,
        backgroundColor:'#cdf1ef',
        width: Dimensions.get('window').width*0.8,
        height:540,
        borderColor: '#cdf1ef',
        borderWidth:2,
        borderRadius:10,
        alignContent:'center'
    },
    heading:{
        textAlign:'center',
        marginTop:10,
        fontSize:24,
        fontFamily:'Alata-Regular',
        color: '#2f8f9d',
    },
    image:{
        height:81,
        width:68,
        marginTop:10,
        borderColor:'gray',
        borderWidth:1,
        alignSelf:'center',
        borderRadius:7,
        backgroundColor:'gray'
    },
    galleryIcon:{
        width:22,
        height:22,
        marginTop:10,
        margin:5
    },
    galleryButton:{
        width:227,
        height:43,
        backgroundColor:'#2F8F9D',
        borderColor:'#2F8F9D',
        borderWidth:1,
        alignSelf:'center',
        marginTop:10,
        borderRadius:9
    },
    galleryText:{
        color:'white',
        fontSize:13,
        marginTop:10,
        fontFamily:'times'
    },
    label:{
        fontSize:13,
        fontWeight:'bold',
        color:'black',
        marginTop:18,
        marginLeft:25,
        fontFamily:'times'
    },
    input:{
        borderBottomWidth:2,
        borderBottomColor:'black',
        width:200,
        height:30,
        marginTop:5,
        padding:5,
        fontSize:13,
        marginLeft:5,
        fontFamily:'times'
    },
    updateButton:{
        width:235,
        height:40,
        backgroundColor:'#2f8f9d',
        borderColor:'#2f8f9d',
        alignContent:'center',
        alignSelf:'center',
        marginTop:10,
        borderRadius:10,
    },
    updateText:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'Alata-Regular',
        color:'white'
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
        height:230,
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

export default AddPatient;