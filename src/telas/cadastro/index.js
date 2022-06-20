import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import Botao from "../../componentes/botao";

export default function Cadastro() {
    return <View style={estilos.container}>

        {/* logo */}

        <Text style={estilos.texto}>Por favor, nos informe o endereço de e-mail.</Text>

        <TextInput style={estilos.inputEmail} placeholder="E-mail"/>

        <Botao>Avançar</Botao>
    </View>
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 30,
        paddingLeft: 30,
        justifyContent: "center",
    },
    texto: {
        fontSize: 16,
        color: "#565656",
        textAlign: "center",
    },
    inputEmail: {
        fontSize: 16,
        backgroundColor: "#F0F1F2",
        borderRadius: 25,
        padding: 8,
        paddingLeft: 20,
        marginTop: 20,
    },
})