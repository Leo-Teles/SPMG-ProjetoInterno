import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  ImageBackground,
  TextInput,
} from 'react-native';
import jwtDecode from 'jwt-decode';

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
      role: ''
    };
  }



  realizarLogin = async () => {

    console.warn(this.state.email + ' ' + this.state.senha);

    try {
      const resposta = await api.post('/Login', {
        email: this.state.email,
        senha: this.state.senha,
      });

      // console.warn(resposta);


      const token = resposta.data.token;
      await AsyncStorage.setItem('userToken', token);

      if (resposta.status == 200) {
        // this.props.navigation.navigate('ConsultaPaciente');
        this.buscarDadosPerfil();
      }

      else {
        console.warn('Email ou senha inválido')
      }

      // console.warn(token);

    } catch (error) {
      console.warn(error);
    }
  };

  buscarDadosPerfil = async () => {
    const valorToken = await AsyncStorage.getItem('userToken')

    if (valorToken != null) {
      this.setState({ email: jwtDecode(valorToken).email });
      this.setState({ role: jwtDecode(valorToken).role });

      this.tipoUsuario(this.state.role);
    }
  }

  tipoUsuario(role) {
    switch (role) {
      case '2':
        return this.props.navigation.navigate('ConsultaMedico');;

      case '3':
        return this.props.navigation.navigate('ConsultaPaciente');;
    }
  }

  render() {
    return (
      <ImageBackground
        source={require('../assets/imgFundo.png')}
        style={StyleSheet.absoluteFillObject}>

        <View style={styles.Corpoimg}>
          <Image
            source={require('../assets/Logo.png')}
            style={styles.ImgLogin}
          />
        </View>

        <View style={styles.CorpoTitulo}>
          <Text style={styles.TituloLogin}> SP Medical Group </Text>
        </View>

        <View style={styles.CorpoEmail}>

          <TextInput
            style={styles.inputEmail}
            placeholder="EMAIL"
            // placeholderTextColor="000000"
            keyboardType="email-address"
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            style={styles.inputSenha}
            placeholder="SENHA"
            // placeholderTextColor="000000"
            keyboardType="default"
            secureTextEntry={true}
            onChangeText={senha => this.setState({ senha })}
          />


          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.realizarLogin}>
            <Text style={styles.Entrar}>ENTRAR</Text>
          </TouchableOpacity>


        </View>


      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  Corpoimg: {
    alignItems: 'center'
  },

  ImgLogin: {
    width: 155,
    height: 155,
    marginTop: 70,
  },

  CorpoTitulo: {
    alignItems: 'center',
    marginTop: 20,
  },

  TituloLogin: {
    color: 'white',
    borderBottomColor: '#009DF5',
    borderBottomWidth: 1,
    width: 215,
    fontSize: 24,
  },

  CorpoEmail: {
    alignItems: 'center',
    marginTop: 45,
  },

  inputEmail: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 20,
    borderColor: '#009DF5',
    borderWidth: 3,
  },

  inputSenha: {
    width: 250,
    height: 40,
    backgroundColor: 'white',
    color: '#A4A4A4',
    borderRadius: 20,
    borderColor: '#009DF5',
    borderWidth: 3,
    marginTop: 20,
  },

  btnLogin: {
    height: 50,
    width: 180,
    borderRadius: 20,
    backgroundColor: '#537BE2',
    marginTop: 60,
    alignItems: 'center',
  },

  Entrar: {
    color: 'white',
    marginTop: 13,
  },


});
