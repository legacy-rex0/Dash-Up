import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  TouchableOpacity,
  Image,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Actions } from "react-native-router-flux";


// const Stack = createNativeStackNavigator();

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="Home"
//           component={HomeScreen}
//           options={{ title: 'Welcome' }}
//         />
//         <Stack.Screen name="Profile" component={ProfileScreen} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

const Welcome = () =>{
  
  const gotoAbout = () =>{
    Actions.Home()
  }

    return(
            <View style = {styles.container}>
            <ImageBackground 
            source={require('../assets/images/plane_purple_background.jpeg')}
            style={styles.image}
            resizeMode='cover'
            >
                <View style={styles.main}>
                <Text style={styles.h1}>
                Financial App
                </Text>
                <Text style={styles.text}>
                Carrying out financial transactions with the best security
                </Text>
                <Image/>

                </View>
                <View style={{flex: 1, flexDirection: 'row', marginTop: 90}}>
                <Image source={require('../assets/images/main_dollar.png')}
                style={styles.currency_image}
                />
                <Image source={require('../assets/images/recieve_dol.png')}
                style={styles.currency_image}/>
                <Image source={require('../assets/images/tran_dollar.png')}
                style={styles.currency_image}/>
                </View>
                
                <View style={styles.startBtn}>
                <TouchableOpacity style={{
                    padding: 50, 
                    backgroundColor: '#490b8f', 
                    borderRadius: 80, 
                    width: 200}}
                    onPress={gotoAbout}>
                <Text style={{color: 'white', fontSize: 22, fontWeight: 'bold'}}>
                        Start
                    </Text>
                
                </TouchableOpacity>
                </View>

                

            </ImageBackground>

            </View>

  )};

export default Welcome;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    
  },
  startBtn:{
    flex: 1,
    justifyContent: 'flex-end',
    left: '40%',
    marginBottom: -10,
    top: 10
  },
  startTouch:{ 
    padding: 40, backgroundColor: 'grey', borderRadius: 20, justifyContent: 'flex-end'
  },
  image:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100%'
  },
  currency_image:{
    width: 90,
    height: 90,
    margin: 15

  },
  h1:{
    fontFamily: 'Roboto-Bold',
    fontWeight: 'bold',
    fontSize: 32,
    color:'#fff',
    margin: 20,
    textAlign:'center'
       
  },
  main:{
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    top: 80
  },
  h2:{

  },
  text:{
    color: 'white',
    fontSize: 16,
    width: 300,
    textAlign: 'center'
    
  }
})