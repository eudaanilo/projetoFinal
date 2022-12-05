import React, { useRef } from "react";
import { Animated, Image, Text, View, StyleSheet, Button, SafeAreaView } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StatusBar } from "expo-status-bar";
import {Entypo, Feather} from '@expo/vector-icons'

export default function App(){

  function FirstPage() {
    return(
      <View style={styles.body}>
        <Text style={styles.instituicao}>INSTITUTO FEDERAL DE ALAGOAS</Text>
        <Image style={styles.imagem}  source={require('./assets/dan.jpg')}/>
        <Text style={styles.biografia}>IDADE, ESCOLA, CURSO, NACIONALIDADE</Text>
        <Image style={styles.instagram} source={require('./assets/instagram.png')}/>
        <Image style={styles.github} source={require('./assets/github.png')}/>
        <Image style={styles.twitter} source={require('./assets/twitter.png')}/>
        <Image style={styles.discord} source={require('./assets/discord.png')}/>
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
        <Tab.Navigator
          tabBarOptions={{
            style:{
              backgroundColor: 'white',
              borderTopColor: 'transparent',
            },
            activeTintColor: 'FFF',
            tabStyle:{
              paddingBottom: 5,
              paddingTop: 5,
            }
          }}
        >
          <Tab.Screen name="Foto de perfil" 
          component={FirstPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="user" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Texto sobre mim" 
          component={SecondPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="info-with-circle" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Vida acadêmica" 
          component={ThirdPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="graduation-cap" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="O que gosto?" 
          component={FourthPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="code" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Fim" 
          component={LastPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="aircraft-take-off" size={size} color={color}/>
            )
          }}
          />
        </Tab.Navigator>
    </NavigationContainer>
  );

}

const styles = StyleSheet.create({
  body:{
    width: "100%",
    height: "100%", 
    backgroundColor: "black",
  },
  imagem:{
    marginTop: 100,
    marginLeft: 163,
    width: 140,
    height: 150,
    borderRadius: 90,
  },
  instituicao:{
    color:'white',
    textAlign:'center'
  },
  biografia:{
    color:'white',
    marginTop: 10,
    marginLeft: 20,
  },
  instagram:{
    width: 50,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  github:{
    width: 50,
    height: 50,
    marginTop: 1,
    marginLeft: 30,
  },
  twitter:{
    width: 50,
    height: 50,
    marginTop: 50,
  },
  discord:{
    width: 50,
    height: 50,
    marginTop: 50,
  },
});