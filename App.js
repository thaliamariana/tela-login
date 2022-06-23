import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import AppLoading from 'expo-app-loading';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from "@expo-google-fonts/montserrat";
import Rotas from "./src/rotas";

export default function App() {

  let [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  }); 

  if (!fonteCarregada){
    return <AppLoading />;
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
        <Rotas />
    </SafeAreaView>
  );
}
