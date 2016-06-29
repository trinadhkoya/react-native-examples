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
import { ACTIONS } from '../../../constants/constants';
import * as NavActions from '../../navigation/NavigationActions'
import TabBarItem from './TabBarItem';


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
        const { navigationState, onNavigate, scenes } = this.props;

        const tabIndex = navigationState.tabs.index;

        return navigationState.tabs.routes.map( (route, index) => {

            let tab             = navigationState[route.key];
            let tabSceneIndex   = tab.index;
            let activeTabIcon   = tab.routes[tabSceneIndex].activeTabIcon;
            let inactiveTabIcon = tab.routes[tabSceneIndex].inactiveTabIcon;

            return (
                <TabBarItem
                    key={index}
                    caption={route.key}
                    isActive={tabIndex === index}
                    activeTabIcon={activeTabIcon}
                    inactiveTabIcon={inactiveTabIcon}
                    onPress={ () => { onNavigate({ type: ACTIONS.SELECT_TAB, tabKey: route.key })}}
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

