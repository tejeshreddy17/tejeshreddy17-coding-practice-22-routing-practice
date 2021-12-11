import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/Header'
import About from './components/About'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import './App.css'

const App = () => (
  <div className="background-card">
    <div className="website-card">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  </div>
)

export default App
