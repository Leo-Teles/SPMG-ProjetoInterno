import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
} from 'react-native';


export default class ConsultaPaciente extends Component {

  constructor(props) {
      super(props);
      this.state = {
          listaConsultas: [],
          email: ''
      };
  }


buscarConsultas = async () => {
 
  const resposta = await api.get('/ConsultaPaciente');
  
  const dadosDaApi = resposta.data;
  
  this.setState({listaEventos: dadosDaApi});
};

componentDidMount(){
  this.buscarConsultas();
}

render() {
  return (
    <View> 
      <Text style={styles.Titulo}> Consultas Medico </Text>
    </View>
  );
}

}


const styles = StyleSheet.create({
  Titulo: {}

});

