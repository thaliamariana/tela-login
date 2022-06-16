import React from "react";
import { View, StyleSheet } from "react-native";
import Topo from "./login/topo";
import Corpo from "./login/corpo";

export default function Login() {
    return <View style={estilos.index}>
        <Topo />
        <Corpo />
    </View>
}

const estilos = StyleSheet.create({
    index: {
        flex: 1,
    }
})