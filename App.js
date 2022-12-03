import React from 'react';
import {View, Text, StatusBar, StyleSheet, Image} from 'react-native';
// import imagem from './img/imagemdandan.jpg';


function App(){



  return(

    <View styles={styles.body}>
    <StatusBar> </StatusBar>
      <View style={styles.borda1}></View>


      <Text style={styles.curso}>DESENVOLVIMENTO DE SISTEMAS</Text>
      {/* <Image style={styles.imagem} source={require('./img/imagemdandan.jpg')}/> */}

      <Text style={styles.nome}>@eudaanilo</Text>


      <Text style={styles.biografia}>Olá, me chamo Danilo e tenho 17 anos. Faço Desenvolvimento de Sistemas no Insituto Federal de Alagoas, Campus Maceió. Amo a Informática e suas especialidades</Text>

      <View style={styles.borda2}></View>



    </View>


  );
}

const styles = StyleSheet.create({
  body:{
    backgroundColor:'black',
    flexDirection:'row',
    justifyContent:'center',
    alignItems: 'center',
    display:'flex'
  },
  nome:{
    textAlign:'center',
    marginTop:15,
    fontWeight:'bold',
  },
  curso:{
    fontWeight:'bold',
    fontSize:15,
    fontFamily: 'Open Sans',
    textAlign:'center',
    marginTop:30,
    color:'black',
  },
  borda1:{
    margin:0,
    height: 70,
    width:'100%',
    backgroundColor: 'purple',
    marginTop:1
  },
  borda2:{
    height:70,
    width:'100%',
    backgroundColor:'purple'
  },
  imagem:{
    alignSelf:'center',
    height:150,
    width:150,
    marginTop:40,
    borderWidth:4,
    borderRadius:'200px'
  },
  biografia:{
    marginTop:20,
    fontFamily:'Courier New',
    fontSize:15,
    textAlign:'center',
  },
})

export default App;