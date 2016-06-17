// ========================================================
// App
// ========================================================

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
import { connect } from 'react-redux';

// first party
import * as ACTIONS from '../constants/ActionTypes';
import MainScreen from './navigation/MainScreen';
import Dock from './navigation/Dock';

// ========================================================
// Component
// ========================================================

class App extends Component {
    render() {
        return (
            <View style={styles.container}>

                <MainScreen
                    navigationState={this.props.navigationState}
                    onNavigate={this.props.onNavigate}
                />

                <Dock
                    navigationState={this.props.navigationState}
                    onNavigate={this.props.onNavigate}
                />

            </View>
        );
    }
}

// ========================================================
// Redux Configurations
// ========================================================

// pass state to props of this component
const mapStateToProps = (state) => {
    return {
        navigationState: state.navigationState,
    }
}

//handle navigation actions - push and pop
const mapDispatchToProps = (dispatch) => {
    return {

        // handle navigation actions
        onNavigate: (action) => {
            switch (action.type) {
                case ACTIONS.JUMP_TO_TAB:
                    dispatch(action);

                    break;

                case 'ADD_TO_TAB_STACK':
                    dispatch(action);

                    break;

                case 'RESET_STACK':
                    dispatch(action);

                    break;

                default:
                    break;
            }
        }
    }
}

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});


// ========================================================
// Exports
// ========================================================

export default connect(mapStateToProps, mapDispatchToProps)(App)

