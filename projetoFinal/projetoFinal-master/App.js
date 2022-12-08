import React, { useRef } from "react";
import { Image, Text, View, StyleSheet, Linking, TouchableOpacity } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo } from '@expo/vector-icons';
import LottieView from 'lottie-react-native';

export default function App(){

  function FirstPage() {
    return(
      <View style={styles.body}>
        <Text style={styles.instituicao}>INSTITUTO FEDERAL DE ALAGOAS</Text>
        <View >
          <Image style={styles.imagem} source={require('./assets/dan.jpg')}/>
            <Text style={styles.biografia}><Text
              onPress={() => {
                Linking.openURL('https://www.instagram.com/eudaanilo/');
              }}>COLOCAR O TEXTO AQUI
              </Text>
            </Text>
            <View style={styles.logos}>
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
          </View>
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
        <View style={styles.borda}>
          <Text></Text>
        </View>
      </View>
    );
  }

  function FourthPage() {
    return(
      <View>
        <View style={styles.figanimationdev}>
          <LottieView
            source={require('./assets/dev.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationjava}>
          <LottieView
            source={require('./assets/java')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationhtml}>
          <LottieView
            source={require('./assets/html.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationjs}>
          <LottieView
            source={require('./assets/js.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationrn}>
          <LottieView
            source={require('./assets/rn.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationcss}>
          <LottieView
            source={require('./assets/css.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationpython}>
          <LottieView
            source={require('./assets/python.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationmusic}>
          <LottieView
            source={require('./assets/music.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationcpu}>
          <LottieView
            source={require('./assets/cpu.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
        <View style={styles.figanimationgpu}>
          <LottieView
            source={require('./assets/gpu.json')}
            autoPlay={true}
            loop={true}
          />
        </View>
      </View>
    );
  }

  function LastPage() {
    return(
      <View style={styles.body}>
        <View style={styles.figanimationrobo}>
          <LottieView
            source={require('./assets/robo.json')}
            autoPlay={true}
            loop={true}
          />
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
            activeTintColor: '#000',
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
    backgroundColor: '#000'
  },
  logos:{
    display:'flex',
    flexDirection:"row",
    justifyContent:"space-evenly",
    alignItems:"center"
  },
  borda:{
    backgroundColor: 'purple',
    height: 80
  },
  imagem:{
    marginTop: 100,
    marginLeft: 163,
    width: 140,
    height: 150,
    borderRadius: 90,
  },
  instituicao:{
    color:'#FFF',
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

  },
  github:{
    width: 60,
    height: 60,
  },
  twitter:{
    width: 65,
    height: 65,
  },
  discord:{
    width: 90,
    height: 50,
  },
  textosecpagina:{
    disoplay: 'flex',
    color: '#FFF',
    fontSize: 20,
    textAlign: 'justify',
    marginLeft: 5,
    marginRight: 10,
    marginTop: 5,
  },
  figanimationdev:{
    width: 200,
    height: 300,
    position: 'absolute',
    left: 150,
    top: 150
  },
  figanimationjava:{
    width: 150,
    height: 130,
    position: 'absolute',
    right: 150,
    top: 40
  },
  figanimationhtml:{
    width: 100,
    height: 200,
    position: 'absolute',
    right: 290,
    top: 450
  },
  figanimationjs:{
    width: 200,
    height: 300,
    position: 'absolute',
    right: 125,
    top: 400
  },
  figanimationrn:{
    width: 150,
    height: 130,
    position: 'absolute',
    right: 10,
    top: 40
  },
  figanimationcss:{
    width: 100,
    height: 200,
    position: 'absolute',
    right: 60,
    top: 450
  },
  figanimationpython:{
    width: 150,
    height: 130,
    position: 'absolute',
    right: 290,
    top: 45
  },
  figanimationcpu:{
    width: 150,
    height: 130,
    position: 'absolute',
    right: 30,
    top: 350
  },
  figanimationgpu:{
    width: 130,
    height: 130,
    position: 'absolute',
    right: 310,
    top: 350
  },
  figanimationmusic:{
    width: 60,
    height: 60,
    position: 'absolute',
    right: 370,
    top: 220
  },
  figanimationrobo:{
    width: '50%',
    height: '50%',
    marginTop: 150,
    marginLeft: 120,
  }
});