import React, { useState } from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import Botao from "../../componentes/botao";
import Texto from "../../componentes/Texto";
import InputTexto from "../../componentes/InputTexto";

export default function Corpo() {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    return <View style={estilos.corpo}>

        <InputTexto onChangeText={text=>setLogin(text)} placeholder="Usuário"/>
        <InputTexto onChangeText={text=>setSenha(text)} placeholder="Senha"/>
        
        <Botao>Entrar</Botao>

        <TouchableOpacity>
            <Texto style={estilos.esqueceuSenha}>Esqueceu a senha? Clique aqui para recuperá-la.</Texto>
        </TouchableOpacity>

        </View>
}

const estilos = StyleSheet.create({
    corpo: {
        paddingLeft: 30,
        paddingRight: 30,
    },
    esqueceuSenha: {
        color: "#565656",
        fontSize: 13,
        marginTop: 15,
        textAlign: "center",
    },
})