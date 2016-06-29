// ========================================================
// NavigationDock
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

// first party
import TabBar from './tabBar/TabBar';

// ========================================================
// Component
// ========================================================

class NavigationDock extends Component {
    render() {

        const { navigationState, onNavigate, scenes } = this.props;

        const NAV_DOCKS = {
            TabBar: TabBar,
        }

        const Component = NAV_DOCKS[scenes.routes[0].dock];

        return (
            <Component navigationState={navigationState} onNavigate={onNavigate} scenes={scenes} />
        );
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({ });

// ========================================================
// Exports
// ========================================================

module.exports = NavigationDock;

