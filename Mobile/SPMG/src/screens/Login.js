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

import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      senha: '',
    };
  }
  //como vamos trabalhar com assync historage,
  //nossa funcao tem que ser async.
  realizarLogin = async () => {
    //nao temos mais  console log.
    //vamos utilizar console.warn.

    //apenas para teste.
    console.warn(this.state.email + ' ' + this.state.senha);

    const resposta = await api.post('/Login', {
      email: this.state.email,
      senha: this.state.senha,
    });

    //mostrar no swagger para montar.
    const token = resposta.data.token;
    await AsyncStorage.setItem('userToken', token);

    //agora sim podemos descomentar.
    if (resposta.status == 200) {
      this.props.navigation.navigate('Main');
    }

    console.warn(token);

    //
  };

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
            placeholderTextColor="000000"
            keyboardType="email-address"
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            style={styles.inputSenha}
            placeholder="SENHA"
            placeholderTextColor="000000"
            keyboardType="default" //para default nao obrigatorio.
            secureTextEntry={true} //proteje a senha.
            // ENVENTO PARA FAZERMOS ALGO ENQUANTO O TEXTO MUDA
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
  Corpoimg:{
    alignItems:'center'
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

  CorpoEmail:{
    alignItems: 'center',
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
  },

  btnLogin: {
    height: 50,
    width: 180,
    borderRadius: 20,
    backgroundColor: '#537BE2',
    marginTop: 50,
    alignItems: 'center',
  }
});
