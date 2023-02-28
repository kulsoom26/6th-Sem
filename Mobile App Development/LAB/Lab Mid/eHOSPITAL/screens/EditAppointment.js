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
import {StackActions, useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';
import {auth, database} from '../firebase';
import checked from '../assets/checked.png';

function EditAppointment({navigation,route}){

    
    const [doctorList, setDoctor] = React.useState([]);
    const [modalVisible, setModalVisible] = React.useState(false);
    const [Edata, setEdata] = React.useState({
        id: route.params.data.keys,
        patientName: route.params.data.patientName,
        doctorName: route.params.data.doctorName,
        date: route.params.data.date,
        reason: route.params.data.reason,
        time: route.params.data.time,
        fees: route.params.data.fees
    });

    const validate = () =>{
        if(Edata.patientName ===''|| Edata.doctorName === ''|| Edata.date === '' || Edata.reason === ''|| Edata.time === ''|| Edata.fees === ''){
            return true
        }
        else{
            return false
        }
      }

      const updateItem = () => {
        
        console.log(Edata)
        database.ref('/appointment/' + route.params.data.keys).set({
           
            patientName: Edata.patientName,
            doctorName: Edata.doctorName,
            date: Edata.date,
            reason: Edata.reason,
            time: Edata.time,
            fees: Edata.fees
        });
        setModalVisible(true);
        
      };
      

    return(
        <SafeAreaView>
            <ScrollView>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text style={styles.deleteHeading}>Updated Successfully!!!</Text>
                <Text style={styles.deleteSubheading}>{Edata.patientName}'s record has been Updated Successfully</Text>
                <TouchableOpacity style={{marginTop:30}}onPress={()=>{
                    setModalVisible(false);
                    navigation.navigate('Appointments')
      navigation.dispatch(
          StackActions.replace('Dashboard')
        );}}>
                <Image source={checked} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </View>  
            </View></Modal>
            <View style={styles.container}>
                <Text style={styles.heading}>Update Information </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Patient Name: </Text>
                    <TextInput 
                        value={Edata.patientName}
                        onChangeText={(text) => setEdata({ ...Edata, patientName: text })}
                        style={[styles.input,{width:160}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Doctor Name: </Text>
                    <TextInput 
                        value={Edata.doctorName}
                        onChangeText={(text) => setEdata({ ...Edata, doctorName: text })}
                        style={[styles.input,{width:150}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Date: </Text>
                    <TextInput 
                        value={Edata.date}
                        onChangeText={(text) => setEdata({ ...Edata, date: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                    
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Reason: </Text>
                    <TextInput 
                        value={Edata.reason}
                        onChangeText={(text) => setEdata({ ...Edata, reason: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Time: </Text>
                    <TextInput 
                        value={Edata.time}
                        onChangeText={(text) => setEdata({ ...Edata, time: text })}
                        style={[styles.input,{width:235}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Fees: </Text>
                    <TextInput 
                        value={Edata.fees}
                        onChangeText={(text) => setEdata({ ...Edata, fees: text })}
                        style={[styles.input,{width:235}]}></TextInput>
                </View>
                <TouchableOpacity 
                disabled={validate()}
                onPress={updateItem}
                   
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>UPDATE</Text>
                </TouchableOpacity>
            </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignSelf:'center',
        marginTop: 40,
        backgroundColor:'#cdf1ef',
        width: Dimensions.get('window').width*0.8,
        height:430,
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
        borderRadius:7
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
        marginTop:40,
        borderRadius:10,
    },
    updateText:{
        textAlign:'center',
        fontSize:24,
        fontFamily:'Alata-Regular',
        color:'white'
    },
    list:{
        width:250,
        height:30,
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

export default EditAppointment;