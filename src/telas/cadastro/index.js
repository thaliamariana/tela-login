import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import Botao from "../../componentes/botao";
import Texto from "../../componentes/Texto";
import InputTexto from "../../componentes/InputTexto";

export default function Cadastro() {

    const [email, setEmail] = useState("")

    return <View style={estilos.container}>

        {/* logo */}

        <Texto style={estilos.texto}>Por favor, nos informe o endereço de e-mail.</Texto>

        <InputTexto onChangeText={(text)=>setEmail(text)} placeholder="E-mail"/>

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
})