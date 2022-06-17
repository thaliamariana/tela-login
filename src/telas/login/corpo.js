import React, { useState } from "react";
import { TextInput, StyleSheet, View, TouchableOpacity, Text } from "react-native";
import Botao from "../../componentes/botao";

export default function Corpo() {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return <View style={estilos.corpo}>

        <TextInput style={estilos.inputUsuario} onChangeText={text=>setLogin(text)} placeholder="Usuário"/>
        <TextInput style={estilos.inputUsuario} onChangeText={text=>setSenha(text)} placeholder="Senha"/>
        
        <Botao>Entrar</Botao>

        <TouchableOpacity>
            <Text style={estilos.esqueceuSenha}>Esqueceu a senha? Clique aqui para recuperá-la.</Text>
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
    esqueceuSenha: {
        color: "#565656",
        fontSize: 13,
        marginTop: 15,
        textAlign: "center",
    },
})