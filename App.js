import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';

export default function App(){

  function FirstPage() {
    return(
      <View style={styles.body}>
        <Text style={styles.instituicao}>INSTITUTO FEDERAL DE ALAGOAS</Text>
        <Image style={styles.imagem} source={require('./assets/dan.jpg')}/>
          <Text style={styles.biografia}><Text
            onPress={() => {
              Linking.openURL('https://www.instagram.com/eudaanilo/');
            }}>COLOCAR O TEXTO AQUI
            </Text>
          </Text>
        <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://www.instagram.com/eudaanilo');
            }
          }
        >
          <Image style={styles.instagram} source={require('./assets/instagram.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://github.com/eudaanilo');
            }
          }
        >
          <Image style={styles.github} source={require('./assets/github.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://twitter.com/usbornn');
            }
          }
        >
          <Image style={styles.twitter} source={require('./assets/twitter.png')}/>
        </TouchableOpacity>
        <TouchableOpacity
            onPress={() => {
              Linking.openURL('https://discord.com/channels/@me');
            }
          }
        >
          <Image style={styles.discord} source={require('./assets/discord.png')}/>
        </TouchableOpacity>
      </View>
    );
  }

  function SecondPage() {
    return(
      <View style={styles.body}>
        <Text style={styles.textosecpagina}> Bom, para quem não me conhece, me chamo Danilo e eu tenho 17 anos. 
          Eu sempre tive uma vocação desde criança por computador, sempre tinha desejo de 
          mexer em qualquer coisa que estivesse dando erro no telefone, até nós dias de 
          hoje minha tia me lança um “Limpa aqui meu telefone, porque tá travando demais”, 
          eu fico olhando e pensando, será que ela acha que eu faço isso na escola? Enfim… 
          eu sempre gostei de coisas complicadas, mas não ao ponto de me fazer desistir, tipo
          esse App. Eu penso que coisas complicadas são para pessoas mais intelectuais, e isso
          é bom… Eu estou fazendo como se fosse algumas especializações em Desenvolvimento
          de Sistemas –vulgo informática– para fazer de tudo um pouco… A área que eu mais 
          gostei da mesma foi em montagem e reparação e a parte de front-end, por mais que 
          React Native trabalhe tanto com a parte de front-end e também de back-end eu 
          gostei de trabalhar com a linguagem. Eu entrei no IFAL durante a pandemia, então
          imaginem, a maior parte do ensino médio foi online, e como todo mundo sabe foi
          difícil pra todo mundo, já que todo mundo não tinha condições de ter um computador
          em casa, e, alem desse problema, tinha o de sempre dormir nas aulas, e o barulho
          que era de panela batendo, gente falando, brigando ou conversando. Esse fato serviu
          para mostrar o quanto a internet e a informática é importante em nossa vida  
        </Text>
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
          <Tab.Screen name="Perfil" 
          component={FirstPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="user" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Sobre" 
          component={SecondPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="info-with-circle" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Educação" 
          component={ThirdPage}
          options={{
            tabBarIcon: ({ size, color}) => (
              <Entypo name="graduation-cap" size={size} color={color}/>
            )
          }}
          />
          <Tab.Screen name="Gostos" 
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
    color: 'blue',
    marginTop: 20,
    marginLeft: 20,
  },
  instagram:{
    width: 50,
    height: 50,
    marginTop: 50,
    marginLeft: 20,
  },
  github:{
    width: 60,
    height: 60,
    marginTop: -55,
    marginLeft: 140,
  },
  twitter:{
    width: 65,
    height: 65,
    marginTop: -59,
    marginLeft: 260,
  },
  discord:{
    width: 90,
    height: 50,
    marginTop: -57,
    marginLeft: 360,
  },
  textosecpagina:{
    color: 'white',
    fontSize: 20,
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
  },
});