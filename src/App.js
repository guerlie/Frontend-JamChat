import React from 'react';
import './App.css';

import Chat from './Pages/Chat'
import Logged from './Pages/Logged'
import Notificaciones from './Pages/Notificaciones'
import Perfil from './Pages/Perfil'
import Unlogged from './Pages/Unlogged'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>

          <Route exact path="/" component={Unlogged}/>
          <Route path="/logged" component={Logged}/>
          <Route path="/perfil" component={Perfil} />
          <Route path="/notificaciones" component={Notificaciones}/>
          <Route path="/chat" component={Chat}/>

        </Switch>
      </div>
    </Router>
  );
}

  export default App;
