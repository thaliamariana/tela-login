import React, { useState } from "react";
import { TextInput, StyleSheet, View } from "react-native";

//inputs
//botao
//esqueceu a senha

export default function Corpo() {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return <View style={estilos.corpo}>

        <TextInput style={estilos.inputUsuario} onChangeText={text=>setLogin(text)} placeholder="Usuário"/>
        <TextInput style={estilos.inputUsuario} onChangeText={text=>setSenha(text)} placeholder="Senha"/>
        
        </View>

}

const estilos = StyleSheet.create({
    corpo: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    inputUsuario: {
        fontSize: 16,
        backgroundColor: "#F0F1F2",
        borderRadius: 25,
        padding: 8,
        paddingLeft: 20,
        marginTop: 25,

    },
})