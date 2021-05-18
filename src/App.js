import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Switch, Route } from 'react-router-dom'
import {AppContext} from "./context"
import Home from './Home'
import Movie from './SingleMovie'

function App() {
  return <Switch>
      <Route path='/' exact>
        <Home />
      </Route>
      <Route path='/movies/:id' children={<Movie />} />
    </Switch>
    
}

export default App
