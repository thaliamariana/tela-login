import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";

//inputs
//botao
//esqueceu a senha

export default function Corpo() {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return <View style={estilos.corpo}>

        <TextInput style={estilos.inputUsuario} onChangeText={text=>setLogin(text)} placeholder="Usuário"/>
        <TextInput style={estilos.inputUsuario} onChangeText={text=>setSenha(text)} placeholder="Senha"/>
    
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

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
    botao: {
        backgroundColor: "#543153",
        marginTop: 20,
        padding: 10,
        borderRadius: 25,
    },
    botaoTexto: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
})