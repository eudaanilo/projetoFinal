import React, { useRef } from "react";
import { Animated, Image, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";

export default function App(){

  function FirstPage() {
    return(
      <View style={styles.body}>
        <View style={styles.img}>
          {/* <Image style={styles.imagem} source={require('./assets/fotodan.png')}/> */}
        </View>
      </View>
    );
  }

  function SecondPage() {
    return(
      <View style={styles.body}>
        <View>
          <Text>Aqui ficará tudo sobre mim \o/</Text>
        </View>
      </View>
    );
  }

  function ThirdPage() {
    return(
      <View style={styles.body}>
        <View>
          <Text>Aqui ficará tudo sobre minha vida acadêmica \o/</Text>
        </View>
      </View>
    );
  }

  function FourthPage() {
    return(
      <View style={styles.body}>
        <View>
          <Text>Aqui ficará tudo o que eu gosto \o/</Text>
        </View>
      </View>
    );
  }

  function LastPage() {
    return(
      <View style={styles.body}>
        <View>
          <Text>Aqui será o fim :</Text>
        </View>
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
  body:{
    width: "100%",
    height: "100%", 
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    color: "purple"
  },
  // img:{
  //   width: 1,
  //   height: 645,
  //   borderRadius:"400",

  // }
});