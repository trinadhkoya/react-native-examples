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
  Animated,
} from 'react-native';

const {
    Transitioner: NavigationTransitioner,
} = NavigationExperimental;

import {
    NavigationSceneRendererProps,
} from 'NavigationTypeDefinition';

// first party
import TabScreen from './TabScreen';

// ========================================================
// Component
// ========================================================

class MainScreen extends Component {

    constructor(props) {
        super(props);

        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        return (
            <NavigationTransitioner
                style={styles.container}
                navigationState={this.props.navigationState}
                onNavigate={this.props.onNavigate}
                renderScene={this._renderScene}
            />
        );
    }

    _renderScene(props: NavigationSceneRendererProps) {
        return (
            <TabScreen
                onNavigate={this.props.onNavigate}
                navigationState={this.props.navigationState}
            />
        )
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

