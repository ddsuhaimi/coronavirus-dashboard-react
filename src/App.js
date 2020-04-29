import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from './scenes/Home';
import Footer from './components/Footer'
import Countries from './scenes/Countries'
import About from './scenes/About'


function App() {
  return (
<Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/countries' component={Countries} />
      <Route path='/about' component={About} />
    </Switch>
    <Footer />
</Router>
  );
}

export default App;
