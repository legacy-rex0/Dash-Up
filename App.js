import React, {Component} from 'react';
import {

} from 'react-native';

import {Router, Scene} from 'react-native-router-flux';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Transaction from './screens/Transaction';

const App = () =>{ 
    return(
      <Router>
        <Scene key="root">
          <Scene key="Welcome" component={Welcome} hideNavBar={true} duration={0} initial={true}/>
          <Scene key="Home" component={Home} hideNavBar={true} duration={0}/>
          <Scene key="Transaction" component={Transaction} hideNavBar={true} duration={0}/>
        </Scene>
      </Router>
    )
  
}

export default App;