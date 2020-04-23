import React from 'react';
// import logo from './logo.svg'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import Home from './scenes/Home';
import Footer from './components/Footer'


function App() {
  return (
<Router>
    <Navbar/>
    <Switch>
      <Route exact path='/' component={Home} />
    </Switch>
    <Footer />
</Router>
  );
}

export default App;
