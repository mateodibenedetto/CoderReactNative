import React, { useState } from 'react'
import { View, Text, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native'

const screenHeight = Dimensions.get("screen").height

const HomeScreen = () => {
  const [task, setTask] = useState('')

  const onHandleChange = (t) => setTask(t);

  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>

      {/* Contenedor del input */}
      <View>
        <TextInput 
          onChangeText={ onHandleChange }
          placeholder='Add a new note...'
          style={ styles.input }
          value={ task }
        />
        <View style={{ marginVertical: 10}}>
          <TouchableOpacity style={[ styles.button, styles.acceptButton]}>
            <Text style={ styles.addButtonText }>Add</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Boton para agragar tarea */}
      <View style={ styles.addButtonContainer }>
        <TouchableOpacity style={ styles.addButton }>
          <Text style={ styles.addButtonText }>+</Text>
        </TouchableOpacity>
      </View>
     
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  
  acceptButton: {
    backgroundColor: 'green', 
  },
  addButton: {
    alignItems: 'center',
    backgroundColor: 950,
    borderRadius: 30,
    height: 50,
    justifyContent: 'center',
    // position: 'absolute',
    width: 50,
  },
  addButtonContainer: {
    right: 10,
    top: screenHeight - 120,
    position: 'absolute',
  },
  addButtonText: {
    color: '#fff',
    fontSize: 15,
    width: 50,
    textAlign: 'center'
  },  
  button: {
    alignSelf: 'flex-start',
    borderRadius: 10,
    padding: 10,

  },
  buttonText: {
    color: 'white',
    fontSize: 15,
  },
  input: {
    backgroundColor: '#dedede',
    borderRadius: 10,
    padding: 10, 
    marginTop: 10,
    color: '#727272',
    outlineStyle: 'none'
  }

})

export default HomeScreen