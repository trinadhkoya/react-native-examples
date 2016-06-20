// ========================================================
// MainScreen
// ========================================================

'use strict'

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
  Easing,
} from 'react-native';

const {
    CardStack: NavigationCardStack,
    Transitioner: NavigationTransitioner,
} = NavigationExperimental;

import {
    NavigationSceneRendererProps,
} from 'NavigationTypeDefinition';

// first party
// import TabScreen from './TabScreen';
// import Scene from './Scene';

// ========================================================
// Component
// ========================================================

class MainScreen extends Component {

    constructor(props) {
        super(props);

        this._renderScene         = this._renderScene.bind(this);
        this._configureTransition = this._configureTransition.bind(this);
    }

    render() {
        return (
            <NavigationTransitioner
                style={styles.container}
                navigationState={this.props.navigationState}
                onNavigate={this.props.onNavigate}
                renderScene={this._renderScene}
                configureTransition={this._configureTransition}
            />
        );
    }

    _renderScene(props) {
        return (
            <Scene
                onNavigate={props.onNavigate}
                navigationState={props.navigationState}
                scene={props.scene}
            />
        )
    }

    _configureTransition() {
        return {
            duration: 0,
            easing: Easing.inOut(Easing.ease),
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

module.exports = MainScreen;

