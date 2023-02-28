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
    Modal,
    StatusBar
} from 'react-native';
import gallery from '../assets/gallery.png';
import {StackActions, useNavigation } from '@react-navigation/native';
import checked from '../assets/checked.png';
import {auth, database} from '../firebase';
import medicinePic from '../assets/medicinePic.jpg'

function EditMedicine({navigation,route}){
    const [modalVisible, setModalVisible] = React.useState(false);
    const [Edata, setEdata] = React.useState({
        id: route.params.data.id,
        name: route.params.data.name,
        quantity:route.params.data.quantity,
        price: route.params.data.price,
        manufactureDate: route.params.data.manufactureDate,
        expireDate: route.params.data.expireDate,
        originCountry: route.params.data.originCountry,
    });

    const validate = () =>{
        if(Edata.name ===''|| Edata.quantity === ''|| Edata.manufactureDate === '' || Edata.expireDate === ''|| Edata.price === ''|| Edata.quantity === '' || Edata.originCountry === ''){
            return true
        }
        else{
            return false
        }
      }

      const updateItem = () => {
        
        console.log(Edata)
        database.ref('/medicine/' + route.params.data.keys).set({
            name: Edata.name,
            quantity:Edata.quantity,
            price: Edata.price,
            manufactureDate: Edata.manufactureDate,
            expireDate: Edata.expireDate,
            originCountry: Edata.originCountry,
        });
        setModalVisible(true);
        
      };
    return(
        <SafeAreaView>
                        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}>
            <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text style={styles.deleteHeading}>Updated Successfully!!!</Text>
                <Text style={styles.deleteSubheading}>{Edata.name}'s record has been Updated Successfully</Text>
                <TouchableOpacity style={{marginTop:30}}onPress={()=>{
                    setModalVisible(false);
                    navigation.navigate('Pharmacy');
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
                <Image style={styles.image} source={medicinePic}/>
                <TouchableOpacity style={styles.galleryButton}>
                    <View style={{flexDirection:'row', justifyContent:'space-evenly'}}>
                        <Image source={gallery} style={styles.galleryIcon}/>
                        <Text style={styles.galleryText}>Choose a picture from library</Text>
                    </View>
                </TouchableOpacity>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Name: </Text>
                    <TextInput 
                        value={Edata.name}
                        onChangeText={(text) => setEdata({ ...Edata, name: text })}
                        style={[styles.input,{width:220}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Quantity: </Text>
                    <TextInput 
                        value={Edata.quantity}
                        onChangeText={(text) => setEdata({ ...Edata, quantity: text })}
                        style={[styles.input,{width:200}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>price: </Text>
                    <TextInput 
                        value={Edata.price}
                        onChangeText={(text) => setEdata({ ...Edata, price: text })}
                        style={[styles.input,{width:230}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Manufacture Date: </Text>
                    <TextInput 
                        value={Edata.manufactureDate}
                        onChangeText={(text) => setEdata({ ...Edata, manufactureDate: text })}
                        style={[styles.input,{width:130}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Expire Date: </Text>
                    <TextInput 
                        value={Edata.expireDate}
                        onChangeText={(text) => setEdata({ ...Edata, expireDate: text })}
                        style={[styles.input,{width:180}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={styles.label}>Origin Country: </Text>
                    <TextInput 
                        value={Edata.originCountry}
                        onChangeText={(text) => setEdata({ ...Edata, originCountry: text })}
                        style={[styles.input,{width:155}]}></TextInput>
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
        marginTop: 20,
        backgroundColor:'#cdf1ef',
        width: Dimensions.get('window').width*0.8,
        height:510,
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

export default EditMedicine;