import './App.css';
import imgLogo from '../assec/Logoicon.ico'




function App() {
  return (
    <div className="App">
      <header class="">
        <div class="conteinerHeader">
          <div>
            <img class="imgLogo"  src={imgLogo} alt="LogoSPMG"/>
            </div>
            <div>
              <h1 class="tituloSP"> SP Medical Group </h1>
            </div>
            <nav class="menuHeader">
              <a class="Cdc" href="#">QUEM SOMOS </a>
              <a class="Cdc" href="#">CONTATOS</a>
              <a class="Cdc" href="#"> SPMG</a>
            </nav>
            <button class="BotãoLogin"> Login </button>

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

          <section class="blocoVisao">

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

      export default App;


