import { Component } from 'react'
import '../Login/login.css'
import { Link } from 'react-router-dom';
import axios from 'axios';


import imgMedicos from '../assec/imgMedicos.png'
import LogoSPMG from '../assec/LogoSPMG.png'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
            erroMensagem: '',
            isLoading: false
        };
    };

    render() {
        return (
            <div>

                <main>
                    <section class="todosBlocos">

                        <div class="bloco1">
                            <div>
                                <img class="imgMedicos" src={imgMedicos} />
                            </div>
                        </div>

                        <div class="bloco2">
                            <div>
                                <img class="IMGLogo" src={LogoSPMG} />
                            </div>

                            <div>
                                <h1 class="NomeLogin">Nome</h1>
                                <input class="InputNome" type="text" />
                                <hr class="HrNome" />
                            </div>

                            <div>
                                <h1 class="SenhaLogin">Senha</h1>
                                <input class="InputSenha" type="text" />
                                <hr class="HrSenha" />
                            </div>

                            <div>

                                <button class="EsqueceuSenha"> Esqueceu a senha? </button>
                            </div>

                            <div>
                                <Link to="login">Login</Link>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        )
    }

}