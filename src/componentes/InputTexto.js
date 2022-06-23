import React from "react";
import { TextInput, StyleSheet } from "react-native";

export default function InputTexto(props) {
    return <TextInput style={estilos.input} onChangeText={props.onChangeText} placeholder={props.placeholder} placeholderTextColor={"#66676D"}/>
}

const estilos = StyleSheet.create({
    input: {
        fontSize: 16,
        fontFamily: "MontserratRegular",
        backgroundColor: "#E3E3E5",
        borderRadius: 25,
        padding: 8,
        paddingLeft: 20,
        marginTop: 20,
    }
})