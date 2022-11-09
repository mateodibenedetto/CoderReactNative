import { StyleSheet } from "react-native";
import { useState, useEffect } from "react";
import * as Font from 'expo-font'

const [fontsLoaded, setFontsLoaded] = useState(false)
useEffect(() => {
  if (!fontsLoaded) {
   loadFonts()
  }
});

const loadFonts = async () => {
  await Font.loadAsync({
    'Poppins': require('../assets/fonts/Poppins-Regular.ttf')
  });
  setFontsLoaded(true);
}

if (!fontsLoaded) return(<View/>)


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#432C7A",
    alignItems: "center",
    paddingTop: 100,
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
    backgroundColor: "#F9AA33",
    height: 35,
    width: 45,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 15,
  },
});
