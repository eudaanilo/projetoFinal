import React, { useRef } from "react";
import { Animated, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function App(){


  function FirstPage(){
    return(
      <View style={styles.FirstPage}>
        <Text>Aqui vai ficar minha foto de perfil e um breve resumo sobre mim \o/</Text>
      </View>
    );
  }

  function SecondPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará um texto sobre mim \o/</Text>
      </View>
    );
  }

  function ThirdPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará tudo sobre minha vida acadêmica \o/</Text>
      </View>
    );
  }

  function FourthPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui ficará tudo o que eu gosto \o/</Text>
      </View>
    );
  }

  function LastPage() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Aqui será o fim :</Text>
      </View>
    );
  }

  const Tab = createBottomTabNavigator();
  return(
    <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Foto de perfil" component={FirstPage}/>
          <Tab.Screen name="Texto sobre mim" component={SecondPage}/>
          <Tab.Screen name="Vida acadêmica" component={ThirdPage}/>
          <Tab.Screen name="O que gosto?" component={FourthPage}/>
          <Tab.Screen name="Fim" component={LastPage}/>
        </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  FirstPageflex:{
    justifyContent: 'center',
    alignItems: 'center'
  },

});