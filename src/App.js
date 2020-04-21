import React from 'react';
// import logo from './logo.svg'
import Navbar from './components/layout/Navbar'
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import Dashboard from './components/pages/Dashboard';
import Footer from './components/layout/Footer'


function App() {
  return (
<Router>

    <Navbar/>
    <Switch>
      {/* <Route exact path='/' compponent={World} /> */}
      <Route exact path='/' component={Dashboard} />
    </Switch>
    <Footer />
</Router>
  );
}

export default App;
