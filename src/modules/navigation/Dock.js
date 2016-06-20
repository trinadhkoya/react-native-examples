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
import CONST, { DOCK } from '../../constants/Navigation';
import TabBar from './tabbar/TabBar';

// ========================================================
// Component
// ========================================================

class Dock extends Component {
    render() {

        const { navigationState, onNavigate, scenes } = this.props;

        const DOCK = {
            TabBar: TabBar,
        }

        const Component = DOCK[scenes.routes[0].dock];

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

module.exports = Dock;

