import 'react-native-gesture-handler';
import {
  Text,
  View,
  Image,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import { NavigationContainer, DrawerActions } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SplashScreen from './screens/SplashScreen';
import StartScreen from './screens/StartScreen';
import AdminSignIn from './screens/AdminSignIn';
import Dashboard from './screens/Dashboard';
import ManageDoctors from './screens/ManageDoctors';
import ManageNurses from './screens/ManageNurses';
import ManagePatients from './screens/ManagePatients';
import ManageAppointments from './screens/ManageAppointments';
import ManageReports from './screens/ManageReports';
import ManageRooms from './screens/ManageRooms';
import ManagePharmacy from './screens/ManagePharmacy';
import AddDoctor from './screens/AddDoctor';
import EditDoctor from './screens/EditDoctor';
import AddNurse from './screens/AddNurse';
import EditNurse from './screens/EditNurse';
import AddPatient from './screens/AddPatient';
import EditPatient from './screens/EditPatient';
import AddAppointment from './screens/AddAppointment';
import ViewAppointment from './screens/ViewAppointment';
import EditAppointment from './screens/EditAppointment';
import AddMedicine from './screens/AddMedicine';
import EditMedicine from './screens/EditMedicine';
import dashboardActive from './assets/dashboardActive.png';
import dashboardInactive from './assets/dashboardInactive.png';
import doctorActive from './assets/doctorActive.png';
import doctorInactive from './assets/doctorInactive.png';
import nurseActive from './assets/nurseActive.png';
import nurseInactive from './assets/nurseInactive.png';
import patientActive from './assets/patientActive.png';
import patientInactive from './assets/patientInactive.png';
import appointmentActive from './assets/appointmentActive.png';
import appointmentInactive from './assets/appointmentInactive.png';
import reportActive from './assets/reportActive.png';
import reportInactive from './assets/reportInactive.png';
import roomActive from './assets/roomActive.png';
import roomInactive from './assets/roomInactive.png';
import pharmacyActive from './assets/pharmacyActive.png';
import pharmacyInactive from './assets/pharmacyInactive.png';
import menu from './assets/menu.png'
import { TextInput } from 'react-native-gesture-handler';
import search from './assets/search.png';
import doctorTabActive from './assets/doctorTabActive.png';
import doctorTabInactive from './assets/doctorTabInactive.png';
import add from './assets/add.png'
import CustomDrawer from './CustomDrawer';

const drawer = createDrawerNavigator();
//AdminDashboard
function AdminRoot({navigation}){
  return(
    <drawer.Navigator useLegacyImplementation 
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={
        
        ({ route })=> ({
        drawerIcon: ({focused}) =>{
          if(route.name === 'Dashboard'){
            if(focused){
              return <Image source={dashboardActive} style={{marginLeft:10, width:20,height:20}}/>;
            }
            else{
              return <Image source={dashboardInactive} style={{marginLeft:5, width:20,height:20}}/>;
            }
          }
          else if(route.name === 'Doctors'){
            if(focused){
              return <Image source={doctorActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={doctorInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Nurses'){
            if(focused){
              return <Image source={nurseActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={nurseInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Patients'){
            if(focused){
              return <Image source={patientActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={patientInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Appointments'){
            if(focused){
              return <Image source={appointmentActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={appointmentInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Reports'){
            if(focused){
              return <Image source={reportActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={reportInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Room Management'){
            if(focused){
              return <Image source={roomActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={roomInactive} style={{marginLeft:5}}/>;
            }
          }
          else if(route.name === 'Pharmacy'){
            if(focused){
              return <Image source={pharmacyActive} style={{marginLeft:5}}/>;
            }
            else{
              return <Image source={pharmacyInactive} style={{marginLeft:5}}/>;
            }
          }
          
        },
        headerShown:false,
        drawerActiveBackgroundColor:'#4bb3bc',
        drawerActiveTintColor:'white',
        drawerInactiveTintColor:'#2F8F9D',
        drawerStyle: {
          backgroundColor: '#d5f0ee',
        },
        drawerLabelStyle: {
          fontSize: 17,
          fontWeight:'bold'
        },
        headerStyle:{
          backgroundColor: '#58b8c1',
          height:130,
        },
        headerTitleStyle:{
          fontFamily: 'Alata-Regular',
          fontSize:28,
          marginTop:-57
        },
        headerTintColor:'#fff',
        headerLeft:()=>(
          <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
            <Image source={menu} style={{width:30,height:30}}></Image>
          </TouchableOpacity>
        ),
        
        })}
        >
      <drawer.Screen 
        name='Dashboard' component={AdminTab} 
        options={{
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>DASHBOARD</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),}}/>
      <drawer.Screen 
        name='Doctors' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>DOCTORS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('AddDoctor')}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }} component={ManageDoctors}/>
      <drawer.Screen 
        name='Nurses' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>NURSES</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('stack',{screen:'AddNurse', initial:false})}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }} component={ManageNurses}/>
      <drawer.Screen 
        name='Patients' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>PATIENTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('AddPatient')}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }} component={ManagePatients}/>
      <drawer.Screen 
        name='Appointments' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>APPOINTMENTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          
          }} component={ManageAppointments}/>
      <drawer.Screen 
        name='Reports'
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>REPORTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          
          }} component={ManageReports}/>
      <drawer.Screen 
        name='Room Management' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>ROOM MANAGEMENT</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          }} component={ManageRooms}/>
      <drawer.Screen 
        name='Pharmacy' 
        options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>PHARMACY</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('AddMedicine')}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }} component={ManagePharmacy}/>
    </drawer.Navigator>
    
    
  );
}

const tab = createBottomTabNavigator();
function AdminTab({navigation}){
  return(
    <tab.Navigator 
    screenOptions={({ route })=> ({
      tabBarIcon: ({focused}) =>{
        if(route.name === 'stack'){
          if(focused){
            return <Image source={dashboardActive} style={{margin:10}}/>;
          }
          else{
            return <Image source={dashboardInactive} style={{margin:5}}/>;
          }
        }
        else if(route.name === 'Doctors'){
          if(focused){
            return <Image source={doctorTabActive} style={{margin:5, width:24, height:24}}/>;
          }
          else{
            return <Image source={doctorTabInactive} style={{margin:5, width:24, height:24}}/>;
          }
        }
        
        else if(route.name === 'Patients'){
          if(focused){
            return <Image source={patientActive} style={{margin:5, width:24, height:24}}/>;
          }
          else{
            return <Image source={patientInactive} style={{margin:5, width:24, height:24}}/>;
          }
        }
        else if(route.name === 'Appointments'){
          if(focused){
            return <Image source={appointmentActive} style={{margin:5, width:24, height:24}}/>;
          }
          else{
            return <Image source={appointmentInactive} style={{margin:5, width:24, height:24}}/>;
          }
        }
        else if(route.name === 'Pharmacy'){
          if(focused){
            return <Image source={pharmacyActive} style={{margin:5, width:24, height:24}}/>;
          }
          else{
            return <Image source={pharmacyInactive} style={{margin:5, width:24, height:24}}/>;
          }
        }
        
      },
      headerStyle:{
        backgroundColor: '#58b8c1',
        height:130,
      },
      headerTitleStyle:{
        fontFamily: 'Alata-Regular',
        fontSize:28,
        marginTop:-57
      },
      headerTintColor:'#fff',
      headerLeft:()=>(
        <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
        onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <Image source={menu} style={{width:30,height:30}}></Image>
        </TouchableOpacity>
      ),
      tabBarLabelStyle:{
        fontSize:0
      },
      tabBarStyle: {
        backgroundColor: '#d5f0ee',
        height:60,
        elevation:2
      },
      })}>
      <tab.Screen 
        name='stack'
        component={TabStack}
        options={{
          headerShown:true,
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>DASHBOARD</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),}}
        />
      
      <tab.Screen name='Doctors' component={ManageDoctors} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>DOCTORS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('stack',{screen:'AddDoctor', initial:false})}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }}/> 
      <tab.Screen name='Patients' component={ManagePatients} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>PATIENTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('stack',{screen:'AddPatient', initial:false})}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }}/> 
      <tab.Screen name='Appointments' component={ManageAppointments} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>APPOINTMENTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          
          }}/> 
      <tab.Screen name='Pharmacy' component={ManagePharmacy} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>PHARMACY</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('stack',{screen:'AddMedicine', initial:false})}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }}/>
      
      
    </tab.Navigator>
  );
}


const tabstack = createNativeStackNavigator();
function TabStack(){
  return(
    <tabstack.Navigator screenOptions={{headerShown:false}}>
      <tabstack.Screen name='Dashboard' component={Dashboard} options={{headerShown:false}}/>
      <tabstack.Screen name='Nurses' component={ManageNurses} options={{
          headerShown:false,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>NURSES</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          headerRight:()=>(
            <TouchableOpacity style={{marginLeft:20,marginTop:-50,marginRight:10}}
            onPress={() => navigation.navigate('AddNurse')}>
              <Image source={add}></Image>
            </TouchableOpacity>
          ),
          }}/>
      <tabstack.Screen name='Room Management' component={ManageRooms} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>ROOM MANAGEMENT</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          }}/> 
      <tabstack.Screen name='Reports' component={ManageReports} options={{
          headerShown:true,
          drawerItemStyle:{marginTop:-5},
          headerTitle:()=>(
            <View>
            <Text style={{
              fontFamily: 'Alata-Regular',
              fontSize:28,
              marginBottom:10,
              marginTop:-10,
              color:'white'
            }}>REPORTS</Text>
            <TextInput 
            style={{
              width:Dimensions.get('window').width*0.8,
              borderRadius:8,
              alignSelf:'center',
              borderWidth:1,
              backgroundColor:'white',
              borderColor:'white',
              height:40,
              marginLeft:-30,
              flexDirection:'row',
            }}
            >
              <Image source={search} style={{width:16,height:16,margin:10}}></Image>
              <Text>Search</Text>
            </TextInput>
            </View>
          ),
          
          }}/>
      <tabstack.Screen name='AddDoctor' component={AddDoctor}/>
      <tabstack.Screen name='EditDoctor' component={EditDoctor}/>
      <tabstack.Screen name='AddNurse' component={AddNurse}/>
      <tabstack.Screen name='EditNurse' component={EditNurse}/>
      <tabstack.Screen name='AddPatient' component={AddPatient}/>
      <tabstack.Screen name='EditPatient' component={EditPatient}/>
      <tabstack.Screen name='AddAppointment' component={AddAppointment}/>
      <tabstack.Screen name='ViewAppointment' component={ViewAppointment}/>
      <tabstack.Screen name='EditAppointment' component={EditAppointment}/>
      <tabstack.Screen name='AddMedicine' component={AddMedicine}/>
      <tabstack.Screen name='EditMedicine' component={EditMedicine}/>
    </tabstack.Navigator>
  );
}

const stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <stack.Navigator
        initialRouteName="Splash Screen"
        screenOptions={{ headerShown: false }}>
        <stack.Screen name="Splash Screen" component={SplashScreen} />
        <stack.Screen name="Start Screen" component={StartScreen} />
        <stack.Screen name="Admin SignIn" component={AdminSignIn} />
        <stack.Screen name="Admin Root" component={AdminRoot}/>
      </stack.Navigator>
    </NavigationContainer>
  );
}


