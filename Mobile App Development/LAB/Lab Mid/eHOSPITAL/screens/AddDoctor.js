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
    Modal,
    FlatList,
    StatusBar
} from 'react-native';
import gallery from '../assets/gallery.png';
import doctor from '../assets/nurse.png'
import {StackActions, useNavigation, validatePathConfig } from '@react-navigation/native';
// import ImagePicker from 'react-native-image-picker';
import {auth, database} from '../firebase';
import checked from '../assets/checked.png';


function AddDoctor({navigation}){
    const [modalVisible, setModalVisible] = React.useState(false);
    const [doctors, setDoctors] = React.useState([
    {
        id: '',
        dID: '',
        name: '',
        email: '',
        specialization: '',
        experience: '',
        time: '',
        age:'',
    }
  ]);
  const addpost = () => {
    console.log(doctors)
    database.ref('/doctors').push({
                name: doctors.name,
                dID: doctors.dID,
                email: doctors.email,
                specialization: doctors.specialization,
                experience: doctors.experience,
                time: doctors.time,
                age: doctors.age,
                
    });
    setDoctors('')
    setModalVisible(true)

  };

  const validate = () =>{
    if(doctors.name ===''|| doctors.age === ''|| doctors.experience === '' || doctors.specialization === ''|| doctors.time === ''|| doctors.email === ''|| doctors.dID ===''){
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
                 navigation.navigate('Doctors');
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
                <Image style={styles.image} source={doctor}/>
                <TouchableOpacity style={styles.galleryButton}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Image source={gallery} style={styles.galleryIcon}/>
                        <Text style={styles.galleryText}>Choose a picture from library</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput 
                        value={doctors.name}
                        placeholder='Enter name'
                        onChangeText={(text) => setDoctors({ ...doctors, name: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Doctor ID: </Text>
                    <TextInput 
                        value={doctors.dID}
                        placeholder='Enter doctor ID'
                        onChangeText={(text) => setDoctors({ ...doctors, dID: text })}
                        style={[styles.input,{width:190}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Age: </Text>
                    <TextInput 
                        value={doctors.age}
                        placeholder='Enter age'
                        onChangeText={(text) => setDoctors({ ...doctors, age: text })}
                        style={[styles.input,{width:237}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Email: </Text>
                    <TextInput 
                        value={doctors.email}
                        placeholder='Enter email'
                        onChangeText={(text) => setDoctors({ ...doctors, email: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Specialization: </Text>
                    <TextInput 
                        value={doctors.specialization}
                        placeholder='Enter specialization'
                        onChangeText={(text) => setDoctors({ ...doctors, specialization: text })}
                        style={[styles.input,{width:150}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Experience: </Text>
                    <TextInput 
                        value={doctors.experience}
                        placeholder='Enter experience'
                        onChangeText={(text) => setDoctors({ ...doctors, experience: text })}
                        style={[styles.input,{width:170}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Time: </Text>
                    <TextInput 
                        value={doctors.time}
                        placeholder='Enter time'
                        onChangeText={(text) => setDoctors({ ...doctors, time: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <TouchableOpacity 
                    disabled={validate()}
                    onPress={addpost}
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>ADD DOCTOR</Text>
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
        marginTop:16,
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
        fontSize:15,
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
        fontSize:15,
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
        marginTop:20,
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

export default AddDoctor;