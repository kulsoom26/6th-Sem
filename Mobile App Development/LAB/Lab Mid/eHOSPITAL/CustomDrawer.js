import phone from './assets/phoneIcon.png';
import profile from './assets/adminprofile.png';
import logout from './assets/logout.png';
import cross from './assets/cross.png';
import 'react-native-gesture-handler';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import {DrawerActions, useNavigation } from '@react-navigation/native';
import {DrawerContentScrollView, DrawerItemList, } from '@react-navigation/drawer';

const CustomDrawer = props => {
    const navigation = useNavigation();
    return (
      <View style={{ flex: 1 }}>
        <DrawerContentScrollView {...props}>
          <View style={{flexDirection:'row', justifyContent:'center',alignItems:'center'}}>
            <Text style={{textAlign:'center', color:'#2F8F9D', fontFamily:'Alata-Regular',fontSize:26,marginTop:15,marginLeft:50}}>eHOSPITAL</Text>
            <TouchableOpacity onPress={() => props.navigation.dispatch(DrawerActions.closeDrawer())}>
              <Image source={cross} style={{marginTop:15,marginLeft:60}}/>
            </TouchableOpacity>
            
          </View>
          
          
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingLeft: 20,
              paddingBottom:10
            }}
          >
            <Image source={profile} 
              style={{borderColor:'white', borderWidth:2, height:68, width:68, borderRadius:34}}></Image>
            <View>
              <Text style={{fontSize:24,color:'black', fontFamily:'times', marginLeft:10}}>Admin</Text>
              <View style={{flexDirection:'row',marginLeft:10, marginTop:7}}>
                <Image
                source={phone}
                style={{ width: 15, height: 15 }}
                />
                <Text style={{marginLeft:5, marginTop:-3}}>0332-5316694</Text>
              </View>
            </View>
          </View>
          <View style={{borderWidth:1, borderColor: 'black', width:Dimensions.get('window').width*0.5, alignSelf:'center', marginTop:5, marginBottom:8}}></View>
          <DrawerItemList {...props} />
          <TouchableOpacity style={{marginTop:130, marginLeft:28}} onPress={()=>navigation.navigate('Start Screen')}>
            <View style={{flexDirection:'row'}}>
              <Image source={logout} style={{width:26,height:26, marginRight:24}}/>
              <Text style={{color:'#2f8f9d', fontSize: 17, fontWeight:'bold'}}>Logout</Text>
            </View>
          </TouchableOpacity>
        </DrawerContentScrollView>
  
      </View>
    );
  };
export default CustomDrawer;