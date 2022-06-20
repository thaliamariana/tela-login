import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import Botao from "../../componentes/botao";

export default function Inicial(){
    return <View style={estilos.container}>

        {/* logo */}

        <Botao>Criar nova conta</Botao>

        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.botaoTexto}>Entrar</Text>
        </TouchableOpacity>

    </View>
}

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 30,
        paddingLeft: 30,
        justifyContent: "center"
    },
    botao: {
        alignItems: "center",
        padding: 10,
        marginTop: 10,
    },
    botaoTexto: {
        color: "#543153",
        fontSize: 16,
    },
})