/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
import {name as appName} from './app.json';
// import App from './app/navigators/StackNavigator';
import TabNavigator from './app/tabNavigation/TabNavigator';
import DrawerNavigator from './app/drawerNavigator/DrawerNavigator';
import App from './app/drawerNavigator/DrawerNavigator';

AppRegistry.registerComponent(appName, () => App);
