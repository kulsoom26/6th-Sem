import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from 'react-native';

export default function App() {
  const [item, setItem] = useState('');
  const [date, setDate] = useState('');
  const [list, setList] = useState([]);

  const addItem = () => {
    setList([...list, { key: Math.random().toString(), data: item , day: date}]);
    setItem('');
    setDate('');
    Keyboard.dismiss();
  };
  const removeAll = () => {
    setList([]);
    setDate('');
    setItem('');
  };
  const removeItem = (item) => {
    setList(list.filter((element) => element != item));
  };
  const addDate = (date) => {
    setDate(date);
  };

  const renderElement = ({item}) => (
    <TouchableOpacity style={{}} key={item.key} onPress={() => removeItem(item)}>
      <View
        style={{
          flexDirection: 'row',
          width: '95%',
          alignSelf: 'center',
          backgroundColor: 'olivedrab',
          margin: 1,
          borderRadius: 0,
          justifyContent: 'space-between',
        }}>
        <Text style={{ fontSize: 15, margin: 10, color: 'white' }}>
          {item.data + ' -> ' + item.day}{' '}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View>
      <Text style={styles.title}>Event Planner App</Text>
      <View style={styles.calendarHeadView}>
        <Text style={styles.calendarHeader}>M</Text>
        <Text style={styles.calendarHeader}>T</Text>
        <Text style={styles.calendarHeader}>W</Text>
        <Text style={styles.calendarHeader}>T</Text>
        <Text style={styles.calendarHeader}>F</Text>
        <Text style={styles.calendarHeader}>S</Text>
        <Text style={styles.calendarHeader}>S</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity style={{ padding: 28 }}></TouchableOpacity>
        <TouchableOpacity style={{ padding: 20 }}></TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('1-Wednesday')}>
          <Text style={{ fontSize: 12 }}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('2-Thursday')}>
          <Text style={{ fontSize: 12 }}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('3-Friday')}>
          <Text style={{ fontSize: 12 }}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('4-Saturday')}>
          <Text style={{ fontSize: 12 }}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('5-Sunday')}>
          <Text style={{ fontSize: 12 }}>5</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('6-Monday')}>
          <Text style={{ fontSize: 12 }}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('7-Tuesday')}>
          <Text style={{ fontSize: 12 }}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('8-Wednesday')}>
          <Text style={{ fontSize: 12 }}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('9-Thursday')}>
          <Text style={{ fontSize: 12 }}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20 }}
          onPress={() => addDate('10-Friday')}>
          <Text style={{ fontSize: 12 }}>10</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20, paddingLeft: 12 }}
          onPress={() => addDate('11-Saturday')}>
          <Text style={{ fontSize: 12 }}>11</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 20, paddingLeft: 12 }}
          onPress={() => addDate('12-Sunday')}>
          <Text style={{ fontSize: 12 }}>12</Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('13-Monday')}>
          <Text style={{ fontSize: 12 }}>13</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('14-Tuesday')}>
          <Text style={{ fontSize: 12 }}>14</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('15-Wednesday')}>
          <Text style={{ fontSize: 12 }}>15</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('16-Thursday')}>
          <Text style={{ fontSize: 12 }}>16</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('17-Friday')}>
          <Text style={{ fontSize: 12 }}>17</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('18-Saturday')}>
          <Text style={{ fontSize: 12 }}>18</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17, paddingLeft: 12 }}
          onPress={() => addDate('19-Sunday')}>
          <Text style={{ fontSize: 12 }}>19</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('20-Monday')}>
          <Text style={{ fontSize: 12 }}>20</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('21-Tuesday')}>
          <Text style={{ fontSize: 12 }}>21</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('22-Wednesday')}>
          <Text style={{ fontSize: 12 }}>22</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('23-Thursday')}>
          <Text style={{ fontSize: 12 }}>23</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('24-Friday')}>
          <Text style={{ fontSize: 12 }}>24</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('25-Saturday')}>
          <Text style={{ fontSize: 12 }}>25</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17, paddingLeft: 12 }}
          onPress={() => addDate('26-Sunday')}>
          <Text style={{ fontSize: 12 }}>26</Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('27-Monday')}>
          <Text style={{ fontSize: 12 }}>27</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('28-Tuesday')}>
          <Text style={{ fontSize: 12 }}>28</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('29-Wednesday')}>
          <Text style={{ fontSize: 12 }}>29</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ padding: 17 }}
          onPress={() => addDate('30-Thursday')}>
          <Text style={{ fontSize: 12 }}>30</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 17 }}>
          <Text style={{ fontSize: 12 }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 17 }}>
          <Text style={{ fontSize: 12 }}></Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ padding: 17, paddingRight: 50 }}>
          <Text style={{ fontSize: 12 }}></Text>
        </TouchableOpacity>
      </View>
      <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Event name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter the name of the event"
        value={item}
        onChangeText={setItem}></TextInput>
      <Text style={{ paddingTop: 10, paddingLeft: 10 }}>Date/Day:</Text>
      <TextInput
        style={styles.input}
        placeholder="Select the date/day from calendar"
        value={date}
        onChangeText={setDate}
        editable={false}></TextInput>
      <TouchableOpacity
        style={styles.button1}
        disabled={item.length <= 0 && date.length <= 0} onPress={addItem}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Add To event</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button2} onPress={() => removeAll()} disabled={list.length <= 0}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Remove All</Text>
      </TouchableOpacity>
      <FlatList style={{ width: '100%', borderWidth: 1 }} data={list}
        renderItem={renderElement}></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    marginTop: 40,
    textAlign: 'center',
    fontSize: 30,
    color: 'green',
    fontWeight: 'bold',
  },
  calendarHeadView: {
    flexDirection: 'row',
    marginTop: 10,
    justifyContent: 'space-evenly',
  },
  calendarHeader: {
    backgroundColor: 'green',
    textAlign: 'center',
    color: 'white',
    width: 50,
    height: 30,
    paddingTop: 6,
    //marginLeft:4,
    fontWeight: 'bold',
  },
  input: {
    height: 30,
    borderBottomWidth: 1,
    marginLeft: 5,
    padding: 10,
    color: 'grey',
  },
  button1: {
    backgroundColor: 'olivedrab',
    height: 30,
    width: 150,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 80,
    marginTop: 15,
    marginBottom: 5,
  },
  button2: {
    backgroundColor: 'orange',
    height: 30,
    width: 150,
    justifyContent: 'center',
    textAlign: 'center',
    marginLeft: 80,
    marginTop: 4,
    marginBottom: 5,
  },
});
