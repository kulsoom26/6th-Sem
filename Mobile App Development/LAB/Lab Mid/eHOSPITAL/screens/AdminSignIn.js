import adminSigninLogo from '../assets/adminCircle.png';
import * as React from 'react';
import {
    Text,
    View,
    StyleSheet,
    Dimensions,
    Image,
    TouchableOpacity,
    TextInput,
    Modal,
    Alert
 } from 'react-native';
 import {StackActions, useNavigation, validatePathConfig } from '@react-navigation/native';
function AdminSignIn({navigation}){
    const [modalVisible, setModalVisible] = React.useState(false);
    const [modalVisible1, setModalVisible1] = React.useState(false);
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [ResetEmail, setResetEmail] = React.useState('');
    const [ResetPassword, setResetPassword] = React.useState('');
    const [confirmResetPassword, setconfirmResetPassword] = React.useState('');
    const [pass, setPass] = React.useState('kulsoom026')
    
    
    
    return(
      <View style={{flex:1, backgroundColor:'#e8f8f7'}}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.forgotHeading}>Forgot Password</Text>
            <Text style={styles.forgotSubheading}>Enter your email address for  resetting the password</Text>
            <TextInput style={styles.fogotPasswordTextInput}
            placeholder='Enter your email address'
            showSoftInputOnFocus={false} 
            onChangeText={setResetEmail}
            value={ResetEmail}></TextInput>
            <TouchableOpacity style={styles.forgotContinueButton} onPress={()=>{
              if(ResetEmail === 'kulsoomkhurshid26@gmail.com'){
                setModalVisible(false);setModalVisible1(true)
              }
              else{
                Alert.alert('Enter valid email address to proceed')
              }
                
                }}>
          <Text style={styles.forgotContinueButtonText}
          
          >CONTINUE</Text>
          </TouchableOpacity>
          </View>  
          </View></Modal>
  
          {/* modal2 */}
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}>
          <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.forgotHeading}>Reset Password</Text>
            <Text style={styles.forgotLabel1}>New Password</Text>
            <TextInput style={styles.confirmPasswordTextInput}
            placeholder='Enter new password'
            showSoftInputOnFocus={false} 
            onChangeText={setResetPassword}
            secureTextEntry={true}
            value={ResetPassword}></TextInput>
            <Text style={styles.forgotLabel}>Re-enter New Password</Text>
            <TextInput style={styles.confirmPasswordTextInput}
            showSoftInputOnFocus={false} 
            placeholder='Confirm new password'
            secureTextEntry={true}
            onChangeText={setconfirmResetPassword}
            value={confirmResetPassword}></TextInput>
            <TouchableOpacity style={styles.forgotContinueButton} 
              onPress={()=>{
                if(ResetPassword === confirmResetPassword){
                  setPassword(ResetPassword);
                  setPass(ResetPassword);
                  setModalVisible1(false)}
                  else{
                    Alert.alert("Passwords don't match")
                  }
                }
                }
                
                
            >
          <Text style={styles.forgotContinueButtonText}
          
          >UPDATE PASSWORD</Text>
          </TouchableOpacity>
          </View>  
          </View></Modal>
  
        <View style={styles.loginHead}>
          <View style={styles.logoCircle}>
            <Image source={adminSigninLogo} style={styles.logo}></Image>
          </View>
        </View>
        <View>
          <Text style={styles.heading}>Sign In!!</Text>
          
          <Text style={styles.label}>Email</Text>
          <TextInput style={styles.input} 
          placeholder='Enter your email address'
          onChangeText={setEmail}
          value={email}>
          </TextInput>
          <Text style={styles.label}>Password</Text>
          <TextInput style={styles.input} 
          placeholder='Enter your password'
          onChangeText={setPassword}
          secureTextEntry={true}
          value={password}></TextInput>
          <TouchableOpacity style={styles.forgot} onPress={() => setModalVisible(true)}>
            <Text style={styles.forgotText}>Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} 
          onPress={() => {if (email === 'kulsoomkhurshid26@gmail.com' && password === pass){
            navigation.navigate('Admin Root')
            navigation.dispatch(
              StackActions.replace('Admin Root')
          );
          }
          else{
            Alert.alert('Invalid Credentials, please enter again')
          }}}>
          <Text style={styles.buttonText}>LOGIN</Text>
          </TouchableOpacity>
  
        </View>
        
      </View>
    )
}


const styles = StyleSheet.create({
    label:{
      color: 'grey',
      marginLeft:60,
      marginTop:20,
      fontSize:20,
      fontWeight: 'bold',
    },
    input:{
      height:40,
      width:295,
      alignSelf:'center',
      borderWidth:1,
      borderColor: 'white',
      backgroundColor:'white',
      borderRadius:7,
      marginTop:10,
      fontSize:16,
      color: 'gray',
      padding:10
    },
    forgot:{
      marginTop:10,
      marginLeft:250
    },
    forgotText:{
      color:'#D10000',
      fontSize:13
    },
    button:{
      backgroundColor:'#2f8f9d',
      height: Dimensions.get('window').width * 0.12,
      width:Dimensions.get('window').width * 0.72,
      marginLeft:60,
      marginTop:20,
      borderRadius:7,
      alignItems:'center',
    },
    buttonText:{
      textAlign:'center',
      padding:5,
      fontFamily: 'Alata-Regular',
      fontSize:20
    },
    loginHead:{
      borderBottomLeftRadius: 30,
      borderBottomRightRadius: 30,
      width: Dimensions.get('window').width*1,
      height: Dimensions.get('window').width * 0.55,
      borderBottomWidth:1,
      borderLeftWidth:1,
      borderRightWidth:1,
      backgroundColor: '#6cc1c8',
      borderColor: '#6cc1c8'
    },
    logoCircle:{
      alignSelf:'center',
      height:120,
      width:120,
      borderRadius:60,
      borderWidth:1,
      marginTop:170,
      borderColor:'white',
      backgroundColor:'white'
    },
    logo:{
      height:110,
      width:82,
      marginTop:-5,
      marginLeft:18
    },
    heading:{
      fontSize:24,
      marginTop:100,
      color:'black',
      textAlign:'center',
      marginBottom:10,
      fontFamily: 'Alata-Regular'
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
      height:373,
      marginTop:Dimensions.get('window').height * 0.4
    },
    modalBackground:{
      flex:1,
      backgroundColor: 'rgba(128,128,128,0.5)',
    },
    forgotHeading:{
      fontFamily:'Alata-Regular',
      fontSize:26,
    },
    forgotSubheading:{
      fontSize:16,
      textAlign:'center',
      marginTop:20,
      fontFamily:'Times New Roman'
    },
    fogotPasswordTextInput:{
      marginTop:40,
      width:Dimensions.get('window').width*0.75,
      height:50,
      borderRadius:7,
      borderColor:'grey',
      borderWidth:2,
      fontSize:16,
      padding:5
    },
    forgotContinueButton:{
      backgroundColor:'#2f8f9d',
      height: Dimensions.get('window').width * 0.13,
      width:Dimensions.get('window').width * 0.75,
      marginTop:30,
      borderRadius:7,
      alignItems:'center',
    },
    forgotContinueButtonText:{
      textAlign:'center',
      padding:7,
      fontFamily: 'Alata-Regular',
      fontSize:24
    },
    forgotLabel:{
      marginTop:10,
      fontSize:18,
      textAlign:'left',
      marginLeft:-120
    },
    forgotLabel1:{
      marginTop:10,
      fontSize:18,
      textAlign:'left',
      marginLeft:-190
    },
    confirmPasswordTextInput:{
      marginTop:10,
      width:Dimensions.get('window').width*0.75,
      height:50,
      borderRadius:7,
      borderColor:'grey',
      borderWidth:2,
      fontSize:16,
      padding:5
    },
});

export default AdminSignIn;