import React from "react";
import { StatusBar, SafeAreaView, Text } from "react-native";
import Login from "./src/telas";

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar />
      <Login />
    </SafeAreaView>
  );
}
