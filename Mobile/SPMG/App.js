/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import 'react-native-gesture-handler';

 import React, {Component} from 'react';
 
 import {NavigationContainer} from '@react-navigation/native';
 import {createStackNavigator} from '@react-navigation/stack';
 
 import {StatusBar, StyleSheet} from 'react-native';
 
 import ConsultaPaciente from './src/screens/ConsultaPaciente';
 import Login from './src/screens/Login';
 import ConsultaMedico from './src/screens/ConsultaMedico';
 
 const AuthStack = createStackNavigator();
 
 class App extends Component {
   render() {
     return (
       <NavigationContainer>
         <StatusBar
           hidden={true}
         />
         <AuthStack.Navigator
           screenOptions={{
             headerShown: false,
           }}>
           <AuthStack.Screen name="Login" component={Login} />
           
           <AuthStack.Screen name="ConsultaPaciente" component={ConsultaPaciente}/>
           <AuthStack.Screen name="ConsultaMedico" component={ConsultaMedico} />
         </AuthStack.Navigator>
       </NavigationContainer>
     );
   }
 }
 
 const styles = StyleSheet.create({
   
 
   // estilo dos ícones da tabBar
   tabBarIcon: {
     width: 22,
     height: 22,
   },
 });
 
 export default App;