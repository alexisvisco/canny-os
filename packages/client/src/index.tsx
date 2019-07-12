import React from 'react'
import './index.css'
import Dashboard from './routes/Dashboard'
import * as serviceWorker from './serviceWorker'
import { render } from 'react-dom'
import { Route, Router } from 'react-router-dom'
import { CreateBoard } from './routes/CreateBoard'
import { Header } from './components/header/Header'
import history from './history'

const routing = (
  <Router history={ history }>
    <Header/>
    <div>
      <Route exact path="/" component={ Dashboard }/>
      <Route exact path="/boards" component={ Dashboard }/>
      <Route exact path="/boards/create" component={ CreateBoard }/>
    </div>
  </Router>
)

render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
