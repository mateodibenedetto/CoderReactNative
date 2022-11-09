import { useState, useEffect } from "react";
import { Text, TextInput, View, TouchableOpacity, FlatList, StyleSheet } from "react-native";
import * as Font from 'expo-font';

import Modal from "./Modal"; 

export const Notes = () => {
  const [fontsLoaded, setFontsLoaded] = useState(false)
  useEffect(() => {
    if (!fontsLoaded) {
      Font.loadAsync({
        'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
      });
      setFontsLoaded(true);
    }
  });

  const [textItem, setTextItem] = useState("");
  const [list, setList] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [itemSelected, setItemSelected] = useState({});  

  const onHandleChange = (t) => setTextItem(t);

  const addItem = () => {
    if(textItem === "" || textItem.length < 3) return
    setList((currentState) => [ 
      ...currentState,
      { id: Math.random().toString(), value: textItem, checked: false },
    ]);
    setTextItem("");  
  };

  const selectedItem = (id) => { 
    setItemSelected(list.find((item) => item.id === id));
    setModalVisible(true);
  };

  const deleteItem = () => {
    setList((currentState) =>
      currentState.filter((item) => item.id !== itemSelected.id)
    );
    setItemSelected({});
    setModalVisible(false);
  };

  const cancelDeleteItem = () => {
    setModalVisible(false);
  };


  const checkedItem = (id) => {
    list.map((item) => {
      if(id === item.id) {
        item.checked = !item.checked
      }
    })
    
    console.log(list)
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.listItems} onPress={() => selectedItem(item.id)}>
      <TouchableOpacity style={styles.checkbox} onPress={() => checkedItem(item.id)}>
        { item.checked === true ? console.log('tachado') : console.log('no tachado')}
        {/* { item.checked === true ? <Text>✔️</Text> : <Text></Text>} */}
      </TouchableOpacity>
      <Text style={styles.item}>{item.value}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List 🛍️</Text>
      <View style={styles.inputcontainer}>
        <TextInput
          placeholder="new item"
          placeholderTextColor="white"
          style={styles.inputStyle}
          value={textItem}
          onChangeText={onHandleChange}
        />
        <TouchableOpacity style={styles.button} onPress={addItem}>
          <Text style={{color: '#fff'}}> Add </Text>
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={list}
          keyExtractor={(item) => item.id}
          renderItem={ renderItem }
        />
      </View>
      <Modal isVisible={modalVisible} actionDeleteItem={deleteItem} actionCancelDeleteItem={cancelDeleteItem} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A77979",
    alignItems: "center",
    paddingTop: 100,
    fontFamily: 'Poppins'
  },
  title: { 
    fontSize: 35, 
    color: '#fff', 
    fontWeight: 45,
    fontFamily: 'Poppins'
  },
  listItems: {
    paddingTop: 50,
    flexDirection: "row-reverse",
    alignItems: 'center',
    gap: 20,
    justifyContent: 'center',
  },
  inputcontainer: {
    marginTop: 30,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    paddingHorizontal: 30,
  },
  inputStyle: {
    borderBottomColor: "black",
    borderBottomWidth: 1,
    width: 250,
    outlineStyle: 'none',
    color: "#fff",
    fontFamily: 'Poppins'
  },
  button: {
    backgroundColor: "#472D2D",
    height: 35,
    width: 75,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
    color: "#fff",
  },
  item: {
    color: "#fff",
    fontSize: '1.5rem', 
  },
  checkbox: {
    width: 25,
    height: 25,
    borderWidth: 2,
    borderColor: 'd2d2d2',
    marginLeft:5
  }
});
