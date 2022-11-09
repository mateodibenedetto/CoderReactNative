import {
  StyleSheet,
  Text,
  View,
  Pressable,
  Modal as NewModal,
} from "react-native";
import React from "react";

const Modal = (props) => {
  const { isVisible, actionDeleteItem, actionCancelDeleteItem } = props;

  return (
    <NewModal animationType="fade" transparent={true} visible={isVisible}>
      <View style={styles.centeredView}>
        <View style={styles.container}>
          <Text style={{fontSize: 20}}>Queres Eliminar este elemento? </Text>
          <Pressable
            onPress={() => actionDeleteItem()}
            style={styles.modalBtn}
          >
            <Text style={{color: '#fff'}}>Eliminar</Text>
          </Pressable>
          <Pressable
            onPress={() => actionCancelDeleteItem()}
            style={styles.modalBtn}
          >
            <Text style={{color: '#fff'}}>Cancelar</Text>
          </Pressable>
        </View>
      </View>
    </NewModal>
  );
};

export default Modal;

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: '#FFF5E4',
    borderRadius: 2,
  },  
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalBtn: {
    flex: 1,
    marginTop: 20,
    padding: 2,
    justifyContent: 'space-between',
    backgroundColor: '#E94560',
    textAlign: 'center',
    borderRadius: 2, 
    textTransform: 'capitalize',	
  }
});
