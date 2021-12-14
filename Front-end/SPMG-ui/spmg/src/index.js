import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import './index.css';

import Home from './pages/Home/App';
import consultaAdm from './pages/ConsultaAdm/consultaAdm';
import Login from './pages/Login/login';

import reportWebVitals from './reportWebVitals';

const routing = (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/ConsultaAdm" component={consultaAdm} />
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
