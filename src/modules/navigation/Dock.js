// ========================================================
// Dock
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

import TabBar from './tabbar/TabBar';

// ========================================================
// Component
// ========================================================

class Dock extends Component {
    render() {

        const { navigationState, onNavigate } = this.props;

        let activeTabIndex     = navigationState.index;
        let activeTab          = navigationState.routes[activeTabIndex];
        // let activeScreenIndex  = activeTab.index;
        // let activeDock         = activeTab.children[activeScreenIndex].dock;

        const DOCKS = {
            TabBar: TabBar,
        }

        const Component = DOCKS[activeTab.dock];

        return (
            <Component navigationState={navigationState} onNavigate={onNavigate} />
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

module.exports = Dock;

