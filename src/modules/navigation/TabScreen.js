// ========================================================
// TabScreen
// ========================================================

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native';

const {
    View: NavigationView,
    CardStack: NavigationCardStack,
} = NavigationExperimental;

import {
    NavigationSceneRendererProps,
} from 'NavigationTypeDefinition';

// first party
import NavigationBar from './NavigationBar';
import Screen from './Screen';

// ========================================================
// TabScreen
// ========================================================

class TabScreen extends Component {

    constructor(props) {
        super(props);

        this._renderHeader = this._renderHeader.bind(this);
        this._renderScene  = this._renderScene.bind(this);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <NavigationCardStack
                direction={'horizontal'}
                style={styles.tabContent}
                navigationState={navigationState}
                onNavigate={onNavigate}
                renderOverlay={this._renderHeader}
                renderScene={this._renderScene}
            />
        );
    }

    _renderHeader(props) {
        return (
            <NavigationBar
                {...props}
                onNavigate={this.props.onNavigate}
                navigationState={this.props.navigationState}
            />
        )
    }

    _renderScene(props) {
        return (
            <Screen
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

module.exports = TabScreen;

