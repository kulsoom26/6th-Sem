import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  StatusBar,
  Modal
} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import uploadInvoiceInactive from '../assets/uploadInvoiceInactive.png';
import uploadInvoiceActive from '../assets/uploadInvoiceActive.png';
import uploadPrescriptionInactive from '../assets/uploadPrescriptionInactive.png';
import uploadPrescriptionActive from '../assets/uploadPrescriptionActive.png';
import uploadReportInactive from '../assets/uploadReportInactive.png';
import uploadReportActive from '../assets/uploadReportActive.png';
import checked from '../assets/checked.png';
import addReport from '../assets/addReport.png';
import { TextInput } from 'react-native-gesture-handler';
import {auth, database} from '../firebase';

function ManageReports({navigation,route}){
  const d = ["hello","heeie"]

  React.useEffect(() => {
    //getPatient(),
    //getDoctor()
    getReport()
  }, []);
  const getDoctor = () =>{
    database.ref('/doctors').on('value', parentsnap => {
      const Alldata = [];
      parentsnap.forEach(childsnap => {
        const key = childsnap.key;

        const {name} = childsnap.val();
        const obj = {name: name,};
        

        //console.log(obj)

        Alldata.push((obj.name));
        console.log(obj.name.val)
      });
      console.log(Alldata)
      //setDoctor(Alldata);
      setDoctor(Alldata)
      // console.log(Alldata[1].name)
      setModalVisible1(true)
    });
  }
 
  
  const getReport = () => {
    database.ref('/report').on('value', parentsnap => {
      const Alldata = [];
      parentsnap.forEach(childsnap => {
        const key = childsnap.key;

        const {patientName, patientContact, doctorName, date, result} = childsnap.val();
        const obj = {patientName: patientName, patientContact:patientContact, doctorName:doctorName, date:date, result:result, keys:key};

        //console.log(obj)

        Alldata.push(obj);
      });
      console.log(Alldata)
      setReport(Alldata);
    });
  }
  // console.log(patientList)
  // console.log(doctorList)
  const [reports, setReport] = React.useState([]);

  const [doctorList, setDoctor] = React.useState([]);
  const [Edata, setEdata] = React.useState([
    {
      id: '',
      patientName: '',
      doctorName: '',
      date:'',
      result: '',
      patientContact: '',
    }
  ])
  const [modalVisible, setModalVisible] = React.useState(false);
  const [modalVisible1, setModalVisible1] = React.useState(false);
  const [modalVisible2, setModalVisible2] = React.useState(false);
  const [name, setName] = React.useState('')
  const [source,setSource] = React.useState(uploadInvoiceInactive);
  const [source1,setSource1] = React.useState(uploadPrescriptionInactive);
  const [source2,setSource2] = React.useState(uploadReportInactive);

  const deleteItem = key => {
    database.ref('/report/' + key).remove();
  };


  const addpost = () => {
    database.ref('/report').push({
                patientName:Edata.patientName,
                doctorName: Edata.doctorName,
                patientContact: Edata.patientContact,
                result:Edata.result,
                date: Edata.date,
                
    });
    setEdata('')
    setModalVisible1(false)
    setModalVisible2(true)

  };

  const validate = () =>{
    if(Edata.patientName ===''|| Edata.doctorName === ''|| Edata.patientContact === '' || Edata.date === ''|| Edata.result === ''){
        return true
    }
    else{
        return false
    }
  }
    return(
        <SafeAreaView style={{height:Dimensions.get('window').height*0.8, marginTop:15}}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible2}>
            <View style={styles.modalBackground}>
            <View style={styles.modalView}>
                <Text style={styles.deleteHeading}>Added Successfully!!!</Text>
                <Text style={styles.deleteSubheading}>Record has been added Successfully</Text>
                <TouchableOpacity style={{marginTop:30}}onPress={()=>{setModalVisible2(false)
                 
                }}>
                <Image source={checked} style={{width:40,height:40}}/>
                </TouchableOpacity>
            </View>  
            </View></Modal>
          <StatusBar backgroundColor='#4bb3bc'></StatusBar>
          <Text style={[styles.deleteHeading,{textAlign:'center', color:'#2f8f9d'}]}>REPORTS</Text>
          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}>
          <View style={styles.modalBackground}>
          <View style={styles.modalView}>
            <Text style={styles.deleteHeading}>Deleted Successfully!!!</Text>
            <Text style={styles.deleteSubheading}>{name}'s record has been deleted Successfully</Text>
            <TouchableOpacity style={{marginTop:30}}onPress={()=>{setModalVisible(false)}}>
              <Image source={checked} style={{width:40,height:40}}/>
            </TouchableOpacity>
          </View>  
          </View></Modal>

          <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible1}>
          <View style={[styles.modalBackground]}>
          <View style={[styles.modalView,{marginTop:278,height:495,borderBottomLeftRadius:0,borderBottomRightRadius:0,alignItems:'flex-start',width:Dimensions.get('window').width}]}>
          <Text style={[styles.deleteHeading,{color:'#2f8f9d',marginLeft:90,marginBottom:10,marginTop:-20}]}>Add Report</Text>
          <View style={{flexDirection:'row'}}>
                    <Text style={styles.addReportLabel}>Report For: </Text>
                    <TextInput 
                    showSoftInputOnFocus={false} 
                        value={Edata.patientName}
                        onChangeText={(text) => setEdata({ ...Edata, patientName: text })}
                        style={[styles.addReportInput,{width:220,marginLeft:20}]}></TextInput>
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={[styles.addReportLabel,{marginTop:20}]}>Doctor Name: </Text>
                    <SelectList 
                        setSelected={(val) => setEdata({ ...Edata, doctorName: val })}  
                        data={doctorList} 
                        save="value"
                        value = {Edata.doctorName}
                    />
                    
                </View>
            <View style={{flexDirection:'row'}}>
                    <Text style={[styles.addReportLabel,{marginTop:20}]}>Date: </Text>
                    <TextInput 
                      showSoftInputOnFocus={false} 
                        value={Edata.date}
                        onChangeText={(text) => setEdata({ ...Edata, date: text })}
                        style={[styles.addReportInput,{width:290,marginTop:3}]}></TextInput>
                    
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.addReportLabel,{marginTop:20}]}>Result: </Text>
                    <TextInput 
                    showSoftInputOnFocus={false} 
                        value={Edata.result}
                        onChangeText={(text) => setEdata({ ...Edata, result: text })}
                        style={[styles.addReportInput,{width:270,marginTop:3}]}></TextInput>
                </View>
                <View style={{flexDirection:'row'}}>
                    <Text style={[styles.addReportLabel,{marginTop:20}]}>Patient Contact: </Text>
                    <TextInput 
                    showSoftInputOnFocus={false} 
                        value={Edata.patientContact}
                        onChangeText={(text) => setEdata({ ...Edata, patientContact: text })}
                        style={[styles.addReportInput,{width:195,marginTop:6}]}></TextInput>
                </View>
                <Text style={[styles.addReportLabel,{marginTop:20}]}>Type of Record </Text>
                <View style={{flexDirection:'row',marginRight:40,marginTop:10}}>
                    <TouchableOpacity style={{width:30,height:30,marginRight:120}}onPress={
                      ()=>setSource2(uploadReportActive)}>
                        <Image source={source2} style={{width:30,height:30}}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={{width:30,height:30,marginRight:120}}
                      onPress={
                      ()=>setSource1(uploadPrescriptionActive)}>
                        <Image source={source1} style={{width:30,height:30}}/>
                      </TouchableOpacity>
                      <TouchableOpacity style={{width:30,height:30,marginRight:30}} onPress={
                      ()=>setSource(uploadInvoiceActive)}>
                        <Image source={source} style={{width:30,height:30}}/>
                      </TouchableOpacity>
                </View>
                <View style={{flexDirection:'row',marginRight:30,marginTop:5}}>
                    <Text style={{fontSize:12,marginRight:100}}>Report</Text>
                    <Text style={{fontSize:12,marginRight:100}}>Prescription</Text>
                    <Text style={{fontSize:12}}>Invoice</Text>
                </View>
                <TouchableOpacity 
                    disabled={validate()}
                    onPress={addpost}
                    style={styles.updateButton}>
                    <Text style={styles.updateText}>ADD REPORT</Text>
                </TouchableOpacity>
          </View>  
          </View></Modal>

          <FlatList
            data={reports}
            renderItem={
              ({ item }) => (
                <TouchableOpacity style={styles.container} onPress={()=> {}} disabled={true}>
                  <View style={{flexDirection:'row'}}>
                    <View style={styles.image}>
                      <Text style={styles.dateDayText}>{item.date.slice(0,2)}</Text>
                      <Text style={styles.dateDayText}>{item.date.slice(3,6)}</Text>
                    </View>
                    <View>
                      <Text style={styles.docName}>Doctor: {item.doctorName}</Text>
                      <Text style={styles.docSpecial}>Patient: {item.patientName}</Text>
                      <Text style={styles.docExp}>Disease: {item.patientContact}</Text>
                      <Text style={styles.docExp}>result: {item.result}</Text>
                    </View>
                  </View>
                  <View style={{flexDirection:'row'}}>
                    
                    <TouchableOpacity style={styles.deletebutton}
                      onPress={()=>{deleteItem(item.keys)
                        setName(item.patientName),
                        setModalVisible(true)}}
                      >
                      <Text style={styles.buttonText}>Delete</Text>
                    </TouchableOpacity>
                  </View>
                  
                </TouchableOpacity>
                
              )}
            keyExtractor={(item) => item.id}
            
          />
          <TouchableOpacity 
              onPress={getDoctor}>
              <Image source={addReport} style={{marginLeft:180,width:50,height:50, marginTop:10}}/>
          </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  container:{
    width:Dimensions.get('window').width * 0.9,
    height: 160,
    borderRadius:9,
    borderColor: '#82DBD8',
    backgroundColor:'#cdf1ef', 
    marginTop:5,
    backgroundColor:'#cdf1ef',
    borderWidth:2,
    alignSelf:'center',
    marginBottom:20
  },
  image:{
    width:52,
    height:53,
    borderWidth:2,
    borderColor: '#2f8f9d',
    backgroundColor:'#2f8f9d',
    margin:15
  },
  docName:{
    fontSize:17,
    fontFamily:'times',
    color:'black',
    marginTop:10,
    fontWeight:'bold'
  },
  docSpecial:{
    fontSize:17,
    color:'black',
    fontFamily:'times',
    fontWeight:'bold'
  },
  docExp:{
    fontSize:14,
    color:'black',
    fontFamily:'times'
  },
  docTime:{
    fontSize:14,
    color:'black',
    fontFamily:'times',
    marginLeft:15
  },
  buttonText:{
    color:'white',
    fontSize:15,
    fontFamily:'times',
    fontWeight:'bold',
    textAlign:'center',
    padding:3
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
  deletebutton:{
    eight:27,
    width:81,
    alignContent:'center',
    color:'white',
    fontSize:14,
    fontFamily:'times',
    fontWeight:'bold',
    backgroundColor:'#D10000',
    borderColor: '#D10000',
    marginLeft:230,
    marginTop:15,
    borderRadius:7
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
    width:Dimensions.get('window').width*0.96,
    height:250,
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
  dateDayText:{
    color:'white',
    fontFamily:'Alata-Regular',
    fontSize:15,
    textAlign:'center'
  },
  addReportLabel:{
    color:'black',
    fontFamily:'times',
    fontWeight:'bold',
    fontSize:17,
    textAlign:'left',
    marginTop:10
  },
  addReportInput:{
    borderBottomWidth:2,
    borderColor:'lightgrey',
    height:40,
    width:Dimensions.get('window').width*0.8,
    color:'#2f8f9d',
    fontSize:15,
    fontFamily:'Alata-Regular',
    marginTop:-10,
    padding:0
  },
});

export default ManageReports;