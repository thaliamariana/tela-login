import React from "react";
import { Text, View, StyleSheet } from "react-native";

//statusbar
//logo

export default function Topo() {
    return <View style={estilos.topo}>
            <Text style={estilos.textoTopo}> Login </Text> 
        </View>
}

const estilos = StyleSheet.create({
    topo: {
        marginTop: 200,
        alignItems: "center",
    },
    textoTopo: {
        color: "#543153",
        fontSize: 45,
    },
})