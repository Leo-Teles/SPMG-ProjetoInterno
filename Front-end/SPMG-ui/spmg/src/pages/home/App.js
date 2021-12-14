import { Component } from 'react';
import './App.css';
import imgLogo from '../assec/Logoicon.ico'
import { Link } from 'react-router-dom';

export default class Home extends Component {

efetuarLogout = () => {
    this.props.history.push('/login')
}
  

  render() {
    return (
      <div className="App">
        <header class="">
          <div class="conteinerHeader">
            <div>
              <img class="imgLogo" src={imgLogo} alt="LogoSPMG" />
            </div>
            <div>
              <h1 class="tituloSP"> SP Medical Group </h1>
            </div>
            <nav id="links" class="menuHeader">
              <a class="Cdc" href="#blocoVisao">QUEM SOMOS </a>
              <a class="Cdc" href="#">CONTATOS</a>
              <a class="Cdc" href="#"> SPMG</a>
              <Link class="BotãoLogin" to="login">LOGIN</Link>
            </nav>
            
          </div>
        </header>

        <main>
          <section class="apresentação">
            <div class="abc">
              <h1 class="nomeHp"> SP Medical Group</h1>
              <hr class="hrHome">
              </hr>
              <h2 class="oqSomos">O Hospital da escola do Senai feito pra você</h2>
            </div>
          </section>

          <section id="QUEM SOMOS" class="blocoVisao">

            <div class="tituloVisao">
              <h1 class="visao">Visão</h1>
              <hr class="hrVisao">
              </hr>
            </div>

            <div class="bloco1">
              <h1>Quem somos?</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
            </div>
          </section>

        </main>
      </div>
    );
  }
}




