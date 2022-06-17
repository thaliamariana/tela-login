import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native"; 

export default function Botao({ children }) {
    return <>
        <TouchableOpacity style={estilos.botao}>
            <Text style={estilos.botaoTexto}>{ children }</Text>
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