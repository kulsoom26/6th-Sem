import React,{useState} from 'react';
import { Text, View, StyleSheet,TouchableOpacity } from 'react-native';

export default function App() {
  const[ans,setAns] = useState(0);
  const[op, setOp] = useState('');
  const[count,setCount] = useState(0);
  const[extra,setExtra] = useState(0);
  const reset = () => {
    setAns(0);
  };
  const off = () => {
    setAns(null);
  };
  const number = (data) =>{
    if(ans == 0)
      setAns(data);
    else if(data == '+' && count == 0){
      setExtra(ans);
      setCount(count + 1);
      setOp('+');
      setAns(0);
    }
    else if(data == '-' && count == 0){
      setExtra(ans);
      setCount(count + 1);
      setOp('-');
      setAns(0);
    }
    else if(data == 'x' && count == 0){
      setExtra(ans);
      setCount(count + 1);
      setOp('x');
      setAns(0);
    }
    else if(data == '÷' && count == 0){
      setExtra(ans);
      setCount(count + 1);
      setOp('÷');
      setAns(0);
    }
    else if(data == '%' && count == 0){
      setExtra(ans);
      setCount(count + 1);
      setOp('%');
    }
    else
      setAns(ans+''+data)
  };
  const calculation = () =>{
    if(op == '+'){
      setAns(parseFloat(extra,10)+parseFloat(ans,10));
      setCount(0);
      setExtra(0);
      setOp('');
    }
    if(op == '-'){
      setAns(parseFloat(extra,10)-parseFloat(ans,10));
      setCount(0);
      setExtra(0);
      setOp('');
    }
    if(op == 'x'){
      setAns(parseFloat(extra,10)*parseFloat(ans,10));
      setCount(0);
      setExtra(0);
      setOp('');
    }
    if(op == '÷'){
      setAns(parseFloat(extra,10)/parseFloat(ans,10));
      setCount(0);
      setExtra(0);
      setOp('');
    }
    if(op == '%'){
      setAns(parseInt(extra,10)/100);
      setCount(0);
      setExtra(0);
      setOp('');
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.answer}>{ans}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.greyButton} onPress={reset}><Text style={styles.Buttons}>AC</Text></TouchableOpacity>
        <TouchableOpacity style={styles.greyButton} onPress={off}><Text style={styles.Buttons}>Off</Text></TouchableOpacity>
        <TouchableOpacity style={styles.greyButton} onPress={() => number('%')}><Text style={styles.Buttons}>%</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => number('÷')}><Text style={styles.Buttons1}>÷</Text></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(7)}><Text style={styles.Buttons1}>7</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(8)}><Text style={styles.Buttons1}>8</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(9)}><Text style={styles.Buttons1}>9</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => number('x')}><Text style={styles.Buttons1}>x</Text></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(4)}><Text style={styles.Buttons1}>4</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(5)}><Text style={styles.Buttons1}>5</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(6)}><Text style={styles.Buttons1}>6</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={() => number('-')}><Text style={styles.Buttons1}>—</Text></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(1)}><Text style={styles.Buttons1}>1</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(2)}><Text style={styles.Buttons1}>2</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number(3)}><Text style={styles.Buttons1}>3</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={()=> number('+')}><Text style={styles.Buttons1}>+</Text></TouchableOpacity>
      </View>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.zeroButton} onPress={()=> number(0)}><Text style={styles.Buttons1}>0</Text></TouchableOpacity>
        <TouchableOpacity style={styles.grayButton} onPress={()=> number('.')}><Text style={styles.Buttons1}>.</Text></TouchableOpacity>
        <TouchableOpacity style={styles.orangeButton} onPress={calculation}><Text style={styles.Buttons1}>=</Text></TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  answer:{
    marginTop:200,
    marginRight:40,
    textAlign:'right',
    color:'white',
    fontSize:70,
  },
  buttons:{
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin:10,
  },
  greyButton:{
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'darkgrey',
  },
  grayButton:{
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'dimgrey',
  },
  zeroButton:{
    width: 150,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'dimgrey',
  },
  Buttons:{
      fontWeight: 'bold',
      fontSize: 24
  },
  Buttons1:{
      fontWeight: 'bold',
      fontSize: 24,
      color:'white'
  },
  orangeButton:{
    width: 70,
    height: 70,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100,
    backgroundColor: 'orange',
  },
});
