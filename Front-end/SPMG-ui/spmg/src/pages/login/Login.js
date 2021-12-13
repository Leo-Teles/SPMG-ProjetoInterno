import { Component } from 'react'


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
        };
    };





    render() {
        return (
            <div>
                <main>
                    <section class="todosBlocos">

                        <div class="bloco1">
                            <div>
                                {/* <img class="ImagemMedicos" src="../Fotos/national-cancer-institute-701-FJcjLAQ-unsplash 1.png"> */}
                            </div>
                        </div>

                        <div class="bloco2">
                            <div>
                                {/* <img class= "IMGLogo" src="../Fotos/logo_spmedgroup_v2 1.png"> */}
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
                                <button class="BotaoLogin">
                                    Login
                                </button>
                            </div>
                        </div>

                    </section>
                </main>
            </div>
        )
    }

}