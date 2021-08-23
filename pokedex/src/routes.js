import { Switch, Route, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Details from './pages/Details'
import Pokedex from './pages/Pokedex'

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <Home />
        </Route>

        <Route exact path='/pokedex'>
          <Pokedex />
        </Route>

        <Route exact path='/pokemon/:name'>
          <Details/>
        </Route>

        <Route>Página não encontrada</Route>
      </Switch>
    </BrowserRouter>
  )
}

export default Router
