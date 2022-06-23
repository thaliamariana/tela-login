import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import Botao from "../../componentes/botao";
import Texto from "../../componentes/Texto";
import { useNavigation } from "@react-navigation/native"

export default function Inicial(){

    const navegacao = useNavigation()

    return <View style={estilos.container}>

        {/* logo */}

        <Botao onPress={() => navegacao.navigate("Cadastro")}>Criar nova conta</Botao>

        <TouchableOpacity style={estilos.botao} onPress={() => navegacao.navigate("Login")}>
            <Texto style={estilos.botaoTexto}>Entrar</Texto>
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