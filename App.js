import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Text>Olá, mundo</Text>
    </SafeAreaView>
  );
}