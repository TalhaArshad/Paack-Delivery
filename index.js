/**
 * @format
 */
import React from 'react'
import {AppRegistry} from 'react-native';
import Navigator from './src/Navigation'
import {name as appName} from './app.json';
import { Provider } from 'react-redux';
import configureStore from './src/Store/storeConfig';

const store = configureStore()
const AppConfiguration = () => (
    <Provider store = { store }>
      <Navigator />
    </Provider>
  )
AppRegistry.registerComponent(appName, () => AppConfiguration);
