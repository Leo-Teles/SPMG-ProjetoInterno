import { Component } from 'react'
import '../login/login.css'
import axios from 'axios'
// import { Link } from 'react-router-dom';
import { parseJwt } from '../../services/auth' 


import imgMedicos from '../assec/imgMedicos.png'
import LogoSPMG from '../assec/LogoSPMG.png'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false,

        };
    };

    efetuaLogin = (event) => {
        event.preventDefault();

        this.setState({ erroMensagem: '', isLoading: true })

        axios.post('http://192.168.6.52:5000/api/Login', {
            email: this.state.email,
            senha: this.state.senha
        })

            .then(resposta => {
                if (resposta.status === 200) {

                    console.log('Meu Token é:' + resposta.data.token)
                    localStorage.setItem('usuario-login', resposta.data.token);
                    this.setState({ isLoading: false })

                    let base64 =localStorage.getItem('usuario-login').split('.')[1]
                    console.log(base64);

                    console.log(window.atob(base64));

                    console.log(JSON.parse(window.atob(base64) ) );
                    console.log(parseJwt().email);

                    if (parseJwt().role === '1') {
                        this.props.history.push('/ConsultaAdm')
                        console.log ('estou logado:' + usuarioAutenticado())
                    }
                    else{
                        this.props.history.push('/')
                    }


                }
            })

            .catch(() => {
                this.setState({ erroMensagem: 'E-mail ou senha inválidos! ', isLoading: false })

            })

    };





    atualizaStateCampo = (campo) => {
        this.setState({ [campo.target.name]: campo.target.value })
    }



    render() {
        return (
            <div>

                <main>
                    <section className="todosBlocos">

                        <div className="bloco1">
                            <div>
                                <img className="imgMedicos" src={imgMedicos} alt="imgmedcos" />
                            </div>
                        </div>

                        <div className="bloco2">
                            <div>
                                <img className="IMGLogo" src={LogoSPMG} alt="logospmg" />
                            </div>

                            <form onSubmit={this.efetuaLogin}>

                                <input className="InputNome"
                                    type="text"
                                    name="email"
                                    value={this.state.email}
                                    onChange={this.atualizaStateCampo}
                                    placeholder='Username'
                                />


                                <input className="InputNome"
                                    type="password"
                                    name="senha"
                                    value={this.state.senha}
                                    onChange={this.atualizaStateCampo}
                                    placeholder='password'
                                />

                                <p style={{ color: 'red' }}> {this.state.erroMensagem}</p>

                                {this.state.isLoading === true &&
                                    <button type="submit" disabled>
                                        Loading...
                                    </button>
                                }

                                {
                                    this.state.isLoading === false &&
                                    <button type='submit' disabled={this.state.email === '' || this.state.senha === '' ?'none' : ''}>
                                        Login
                                    </button>
                                }


                            </form>
                        </div>

                    </section>
                </main>
            </div>
        )
    }

}