import api from '../services/api';

import AsyncStorage from '@react-native-async-storage/async-storage';

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  FlatList,
  InteractionManager,

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

    this.setState({ listaConsultas: dadosDaApi });
  };

  componentDidMount() {
    this.buscarConsultas();
  }

  render() {
    return (
      <View style={styles.TelaPaciente}>


        <View style={styles.CorpoTitulo}>
          <Text style={styles.Titulo}> Consultas Paciente </Text>
        </View>

        <View style={styles.MainBoby}>
          <FlatList
            contentContainerStyle={styles.mainBobyContent}
            data={this.state.listaConsultas}
            keyExtractor={item => item.idCosulta}
            renderItem={this.renderItem}

          />
        </View>

        {/* <View  style={styles.footer}>
        
        </View> */}

      </View>

    );
  }


  renderItem = ({ item }) => (
    
    <View style={styles.flatItemRow}>
      <View style={styles.flatItemContainer}>
        <Text style={styles.flatItemTitle}>{item.nomePaciente}</Text>
        <Text style={styles.flatItemInfo}>{item.descricao}</Text>
      </View>


    </View>
  )


};


const styles = StyleSheet.create({

  TelaPaciente: {
    // backgroundColor: '#c4c4c4',
    // width: 100 %,
    // height:'100 %',
    flex: 1
  },

  CorpoTitulo: {
    alignItems: 'center',
    marginTop: 39,
  },

  Titulo: {
    color: 'Black',
    borderBottomColor: '#009DF5',
    borderBottomWidth: 3,
    width: 215,
    fontSize: 24,
  },

  footer: {
    backgroundColor: '#537BE2',
    width: 411,
    height: 90,
  },

  mainBody: {
    flex: 4,
    backgroundColor: 'red',
  },

});

