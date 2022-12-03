import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App(){


  function fotoResumo(){
    return(
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui vai ficar minha foto de perfil e um breve resumo sobre mim \o/</Text>
      </View>
    );
  }

  function textoSobre() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará um texto sobre mim \o/</Text>
      </View>
    );
  }

  function vidaAcademica() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará tudo sobre minha vida acadêmica \o/</Text>
      </View>
    );
  }

  function oQueGosto() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará tudo o que eu gosto \o/</Text>
      </View>
    );
  }

  function fim() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui será o fim :(</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Foto de perfil" component={fotoResumo}/>
          <Tab.Screen name="Texto sobre mim" component={textoSobre}/>
          <Tab.Screen name="Vida acadêmica" component={vidaAcademica}/>
          <Tab.Screen name="O que gosto" component={oQueGosto}/>
          <Tab.Screen name="Fim" component={fim}/>
        </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  fadingContainer: {
    padding: 20,
    backgroundColor: "powderblue"
  },
  fadingText: {
    fontSize: 28
  },
  buttonRow: {
    flexBasis: 100,
    justifyContent: "space-evenly",
    marginVertical: 16
  }
});