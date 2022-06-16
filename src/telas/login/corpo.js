import React from "react";
import { TextInput, StyleSheet, View } from "react-native";

//inputs
//botao
//esqueceu a senha

export default function Corpo() {
    return <View style={estilos.corpo}>

    <TextInput style={estilos.inputUsuario}>Username</TextInput>
    <TextInput style={estilos.inputUsuario}>Password</TextInput>

    </View>
}

const estilos = StyleSheet.create({
    corpo: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    inputUsuario: {
        backgroundColor: "#F0F1F2",
        color: "#959595",
        borderRadius: 25,
        padding: 8,
        marginTop: 30,
    },
})