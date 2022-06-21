import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import AppLoading from 'expo-app-loading';
import Login from "./src/telas";
import Inicial from "./src/telas/inicial";
import Cadastro from "./src/telas/cadastro";
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";

export default function App() {

  let [fonteCarregada] = useFonts({
    Montserrat_400Regular,
    Montserrat_700Bold,
  }); 

  if (!fonteCarregada){
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Inicial />
      {/* <Login /> */}
      {/* <Cadastro /> */}
    </SafeAreaView>
  );
}
