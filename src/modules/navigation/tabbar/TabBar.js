// ========================================================
// TabBar
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
import TabBarItem from './TabBarItem';
import jumptToTab from '../NavigationActions'

// ========================================================
// Component
// ========================================================

class TabBar extends Component {

    constructor(props) {
        super(props);

        this._renderTabItems = this._renderTabItems.bind(this);
    }

    render() {
        return (
            <View style={styles.container}>
                { this._renderTabItems() }
            </View>
        );
    }

    _renderTabItems() {
        const { navigationState, onNavigate } = this.props;

        const tabIndex = navigationState.index;

        return navigationState.children.map( (tab, index) => {
            return (
                <TabBarItem
                    key={index}
                    caption={tab.key}
                    isActive={tabIndex === index}
                    icon={tab.icon}
                    iconActive={tab.iconActive}
                    onPress={ () => { onNavigate({ type: 'JUMP_TO_TAB', payload: { index: index }}) }}
                />
            )
        })
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    container: {
        height: 50,
        flexDirection: 'row',
    },
});

// ========================================================
// Exports
// ========================================================

module.exports = TabBar;

