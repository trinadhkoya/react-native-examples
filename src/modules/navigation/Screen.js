// ========================================================
// Screen
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
import HomeScreen from '../tabs/home/HomeScreen';
import HomeScreenTwo from '../tabs/home/HomeScreenTwo';
import HomeScreenThree from '../tabs/home/HomeScreenThree';
import SwiperScreen from '../tabs/swiper/SwiperScreen';
import ProfileScreen from '../tabs/profile/ProfileScreen';

// ========================================================
// Component
// ========================================================

class Screen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigationState, onNavigate } = this.props;

        let activeTabIndex     = navigationState.index;
        let activeTab          = navigationState.children[activeTabIndex];
        let activeScreenIndex  = activeTab.index;
        let activeScreen       = activeTab.children[activeScreenIndex].key;

        const TAB_SCREENS = {
            HomeScreen: HomeScreen,
            HomeScreenTwo: HomeScreenTwo,
            HomeScreenThree: HomeScreenThree,
            SwiperScreen: SwiperScreen,
            ProfileScreen: ProfileScreen,
        }

        let Component = TAB_SCREENS[activeScreen];

        return (
            <Component navigationState={navigationState} onNavigate={onNavigate}/>
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

module.exports = Screen;
