// ========================================================
// React Native Examples
// ========================================================

'use strict'

// core
import React, {
  Component
} from 'react';

import {
  StyleSheet,
  Text,
  View
} from 'react-native';

// third party
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import devTools from 'remote-redux-devtools';

// first party
import AppNavigationContainer from './modules/navigation/AppNavigationContainer'
import reducers from './common/reducers/index.js';

// ========================================================
// Redux Configs
// ========================================================

const REDUX_REMOTE_CONFIGS = {
    name: 'react native examples',
    port: '8000',
}

const enhancer = compose(
    applyMiddleware(thunk),
    devTools({ REDUX_REMOTE_CONFIGS })
);

const store = createStore(reducers, enhancer);

// ========================================================
// Main Component
// ========================================================

class react_native_examples extends Component {
    render() {
        return (
            <Provider store={store}>
                <AppNavigationContainer />
            </Provider>
        );
    }
}

// ========================================================
// Exports
// ========================================================

module.exports = react_native_examples

