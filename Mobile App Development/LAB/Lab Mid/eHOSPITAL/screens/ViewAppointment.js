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
import { SelectList } from 'react-native-dropdown-select-list';
import {StackActions, useNavigation } from '@react-navigation/native';
import {auth, database} from '../firebase';
import checked from '../assets/checked.png';

function ViewAppointment({navigation,route}){
    const deleteItem = key => {
        database.ref('/appointment/' + key).remove();
      };
      const [name, setName] = React.useState('')

    const [Edata, setEdata] = React.useState({
        id: route.params.data.keys,
        patientName: route.params.data.patientName,
        doctorName: route.params.data.doctorName,
        date: route.params.data.date,
        reason: route.params.data.reason,
        time: route.params.data.time,
        fees: route.params.data.fees
    });

    

    const [modalVisible, setModalVisible] = React.useState(false);
    return(
        <SafeAreaView>
            <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.deleteHeading}>Deleted Successfully!!!</Text>
            <Text style={styles.deleteSubheading}>{name}'s record has been deleted Successfully</Text>
            <TouchableOpacity style={{marginTop:30}}
            onPress={()=>{
                setModalVisible(false)
                navigation.navigate('Appointments')
                navigation.dispatch(
                    StackActions.replace('Dashboard')
                  )
            
            }}>
              <Image source={checked} style={{width:40,height:40}}/>
            </TouchableOpacity>
          </View>  
          </View></Modal>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Appointment Information </Text>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Patient Name: </Text>
                    <Text style={styles.label1}>{Edata.patientName}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Doctor Name: </Text>
                    <Text style={styles.label1}>{Edata.doctorName}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.label]}>Date: </Text>
                    <Text style={styles.label1}>{Edata.date}</Text>
                </View>
                

                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Reason: </Text>
                    <Text style={styles.label1}>{Edata.reason} </Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Time: </Text>
                    <Text style={styles.label1}>{Edata.time}</Text>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Fees: </Text>
                    <Text style={styles.label1}>{Edata.fees}</Text>
                </View>
                <TouchableOpacity 
                    onPress={()=>{
                        navigation.navigate('EditAppointment',{data:Edata})
                    
                }}
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>EDIT</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                onPress={() => {
                    deleteItem(Edata.keys)
                    setName(Edata.patientName)
                    setModalVisible(true)
                  }}
               
                    style={styles.updateButton1}>
                    <Text style={styles.updateText}>DELETE</Text>
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
        height:440,
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
    label1:{
        fontSize:15,
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
        marginTop:30,
        borderRadius:10,
    },
    updateButton1:{
        width:235,
        height:40,
        backgroundColor:'#D10000',
        borderColor:'#D10000',
        alignContent:'center',
        alignSelf:'center',
        marginTop:30,
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

export default ViewAppointment;