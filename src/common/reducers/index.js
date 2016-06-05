// ========================================================
// MainScreen
// ========================================================
'use strict'

// third party
import { combineReducers } from 'redux';

// first party
import NavigationReducer from '../../modules/navigation/NavigationReducer';

// ========================================================
// Combine Reducers
// ========================================================

const reducers = combineReducers({
    navigationState: NavigationReducer,
})

// ========================================================
// Exports
// ========================================================

module.exports = reducers;
