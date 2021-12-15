import { Component } from 'react'
import '../login/login.css'
import axios from 'axios'
// import { Link } from 'react-router-dom';




import imgMedicos from '../assec/imgMedicos.png'
import LogoSPMG from '../assec/LogoSPMG.png'



export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            senha: '',
           
        };
    };

  efetuaLogin = (event) =>{
      event.preventDefault();

      axios.post()
  }


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

                            <form onSubmit={this.efetuaLogin}>

                                <input class="InputNome"
                                    type="text"
                                    name="email"
                                    value={this.stade.email}
                                    onChange={this.atualizaStateCampo}
                                    placeholder='Username'
                                />


                                <input class="InputNome"
                                    type="password"
                                    name="senha"
                                    value={this.stade.senha}
                                    onChange={this.atualizaStateCampo}
                                    placeholder='password'
                                />

                                {/* <div>

                                    <button class="EsqueceuSenha"> Esqueceu a senha? </button>
                                </div> */}

                                <button type='submit'>
                                    Login
                                </button>
                            </form>
                        </div>

                    </section>
                </main>
            </div>
        )
    }

}