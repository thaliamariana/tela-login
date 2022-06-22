import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Cadastro from "./telas/cadastro";
import Inicial from "./telas/inicial";
import Login from "./telas";

const Stack = createNativeStackNavigator();

export default function Rotas() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Inicial" component={Inicial} />
                <Stack.Screen name="Login" component={Login} />
                <Stack.Screen name="Cadastro" component={Cadastro} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}