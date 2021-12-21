import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css';

import Home from './pages/Home/App';
import consultaAdm from './pages/ConsultaAdm/consultaAdm';
import Login from './pages/Login/Login';

import reportWebVitals from './reportWebVitals';
import { parseJwt, usuarioAutenticado } from './services/auth';
import { Redirect } from 'react-router-dom/cjs/react-router-dom.min';

const PermissaoAdm = ({ component: Component }) => (
  <Route
    render = { props =>
      usuarioAutenticado() && parseJwt().role === '1' ?
        <Component {...props} /> :
        <Redirect to='login' />

    }
  />
)

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <PermissaoAdm path="/ConsultaAdm" component={consultaAdm} />
        <Route path="/Login" component={Login}/>
        
      </Switch>
    </div>
  </Router>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);


reportWebVitals();
