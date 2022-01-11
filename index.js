/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import Home from './screens/Home';
import Welcome from './screens/Welcome';
import Transaction from './screens/Transaction';

AppRegistry.registerComponent(appName, () => App);
