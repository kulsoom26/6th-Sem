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
    StatusBar
} from 'react-native';
import {StackActions, useNavigation } from '@react-navigation/native';
import { SelectList } from 'react-native-dropdown-select-list';


function AddAppointment({navigation,route}){
    const [Edata, setEdata] = React.useState({
        id: '',
        patientName: '',
        doctorName: '',
        date:'',
        reason: '',
        time:'',
        fees: ''
    });
    return(
        <SafeAreaView>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Add Information </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Patient Name: </Text>
                    <TextInput 
                        value={Edata.patientName}
                        placeholder='Enter patient name'
                        onChangeText={(text) => setEdata({ ...Edata, patientName: text })}
                        style={[styles.input,{width:160}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Doctor Name: </Text>
                    <TextInput 
                        value={Edata.doctorName}
                        placeholder='Enter doctor name'
                        onChangeText={(text) => setEdata({ ...Edata, doctorName: text })}
                        style={[styles.input,{width:160}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Date: </Text>
                    <TextInput 
                        value={Edata.date}
                        placeholder='Enter date'
                        onChangeText={(text) => setEdata({ ...Edata, date: text })}
                        style={[styles.input,{width:225}]}></TextInput>
                </View>

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Reason: </Text>
                    <TextInput 
                        value={Edata.reason}
                        placeholder='Enter reason'
                        onChangeText={(text) => setEdata({ ...Edata, reason: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Time: </Text>
                    <TextInput 
                        value={Edata.time}
                        placeholder='Enter time'
                        onChangeText={(text) => setEdata({ ...Edata, time: text })}
                        style={[styles.input,{width:225}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Fees: </Text>
                    <TextInput 
                        value={Edata.fees}
                        placeholder='Enter Fees'
                        onChangeText={(text) => setEdata({ ...Edata, fees: text })}
                        style={[styles.input,{width:225}]}></TextInput>
                </View>
                <TouchableOpacity 
                    onPress={()=>{navigation.navigate('Appointments')
                    navigation.dispatch(
                        StackActions.replace('Dashboard')
                      );
                }}
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>ADD APPOINTMENT</Text>
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
});

export default AddAppointment;