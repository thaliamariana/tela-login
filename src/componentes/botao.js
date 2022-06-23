import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"; 
import Texto from "./Texto";

export default function Botao(props) {
    return <>
        <TouchableOpacity style={estilos.botao} onPress={props.onPress}>
            <Texto style={estilos.botaoTexto}>{ props.children }</Texto>
        </TouchableOpacity>
    </>
}

const estilos = StyleSheet.create({
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