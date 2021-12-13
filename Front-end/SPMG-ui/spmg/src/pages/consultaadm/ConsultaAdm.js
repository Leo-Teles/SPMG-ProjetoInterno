import { Component } from "react";

export default class ConsultaAdm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listaConsultaAdm: [],
            Nome: '',
            DataDeNascimento: '',
            Cpf: '',
            Especialidade: '',
            DataDaConsulta: '',

        }
    }

    //  CadastrarConsulta(){
    //      ConsultaAdm : this.state.Consulta
    //      Nome : this.state.Nome
    //      DataDeNascimento: this.state.DataDaConsulta
    //      Cpf  : this.state.Cpf
    //      Especialidade : this.state.Especialidade
    //      DataDaConsulta : this.state.DataDaConsulta
    //  }

    render() {
        return (
            <div>
                <main>
                    <h3>FDS ESSA MERDA</h3>
                </main>
            </div>
        )
    }
}