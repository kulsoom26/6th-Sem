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
import gallery from '../assets/gallery.png';
import {StackActions, useNavigation } from '@react-navigation/native';
import {auth, database} from '../firebase';
import nurse from '../assets/doctor.png';
import checked from '../assets/checked.png';

function EditNurse({navigation,route}){
    const [Edata, setEdata] = React.useState({
        id: route.params.data.keys,
        nurseName: route.params.data.nurseName,
        nId: route.params.data.nId,
        contact: route.params.data.contact,
        specialization: route.params.data.specialization,
        certification: route.params.data.certification,
        time: route.params.data.time,
        age:route.params.data.age,
    });
    console.log(route.params.data.nId);
    console.log(route.params.data.age);
    const validate = () =>{
        if(Edata.name ===''|| Edata.age === ''|| Edata.experience === '' || Edata.specialization === ''|| Edata.time === ''|| Edata.contact === ''|| Edata.nId ===''){
            return true
        }
        else{
            return false
        }
      }

      const updateItem = () => {
        
        console.log(Edata)
        database.ref('/nurses/' + route.params.data.keys).set({
            nurseName: Edata.nurseName,
            nId: Edata.nId,
            contact: Edata.contact,
            specialization: Edata.specialization,
            certification: Edata.certification,
            time: Edata.time,
            age: Edata.age,
        });
        setModalVisible(true);
        
      };
      const [modalVisible, setModalVisible] = React.useState(false);
    return(
        <SafeAreaView>
            <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text style={styles.deleteHeading}>Updated Successfully!!!</Text>
                <Text style={styles.deleteSubheading}>{Edata.nurseName}'s record has been Updated Successfully</Text>
                <TouchableOpacity style={{marginTop:30}} onPress={()=>{
                    setModalVisible(false);
                    navigation.navigate('Admin Root',{screen:'Nurses'})
                                    navigation.dispatch(
                                        StackActions.replace('Dashboard')
                                    );}}>
                <Image source={checked} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </View>  
            </View></Modal>
            <ScrollView>
            <View style={styles.container}>
                <Text style={styles.heading}>Update Information</Text>
                <Image style={styles.image} source={nurse}/>
                <TouchableOpacity style={styles.galleryButton}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Image source={gallery} style={styles.galleryIcon}/>
                        <Text style={styles.galleryText}>Choose a picture from library</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput 
                        value={Edata.nurseName}
                        onChangeText={(text) => setEdata({ ...Edata, nurseName: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Nurse ID: </Text>
                    <TextInput 
                        value={Edata.nId}
                        onChangeText={(text) => setEdata({ ...Edata, nId: text })}
                        style={[styles.input,{width:195}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Age: </Text>
                    <TextInput 
                        value={Edata.age}
                        onChangeText={(text) => setEdata({ ...Edata, age: text })}
                        style={[styles.input,{width:237}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Contact: </Text>
                    <TextInput 
                        value={Edata.contact}
                        onChangeText={(text) => setEdata({ ...Edata, contact: text })}
                        style={[styles.input,{width:210}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Specialization: </Text>
                    <TextInput 
                        value={Edata.specialization}
                        onChangeText={(text) => setEdata({ ...Edata, specialization: text })}
                        style={[styles.input,{width:150}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Certification: </Text>
                    <TextInput 
                        value={Edata.certification}
                        onChangeText={(text) => setEdata({ ...Edata, certification: text })}
                        style={[styles.input,{width:170}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Time: </Text>
                    <TextInput 
                        value={Edata.time}
                        onChangeText={(text) => setEdata({ ...Edata, time: text })}
                        style={[styles.input,{width:220}]}></TextInput>
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
        height:190,
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

export default EditNurse;