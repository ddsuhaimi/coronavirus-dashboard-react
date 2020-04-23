import React from 'react';
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.scss';
import Home from './scenes/Home';
import Country from './scenes/Country'
import Footer from './components/Footer'


function App() {
  return (
<Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/country' component={Country} />
    </Switch>
    <Footer />
</Router>
  );
}

export default App;
