// ========================================================
// Scene
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
import InfoScreen from '../tabs/info/InfoScreen';
import ProfileScreen from '../tabs/profile/ProfileScreen';
import ModalScreen from '../tabs/modal/ModalScreen';

// ========================================================
// Component
// ========================================================

class Scene extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const { navigationState, onNavigate, scene } = this.props;

        const TAB_SCREENS = {
            HomeScreen: HomeScreen,
            HomeScreenTwo: HomeScreenTwo,
            HomeScreenThree: HomeScreenThree,
            InfoScreen: InfoScreen,
            ProfileScreen: ProfileScreen,
            ModalScreen: ModalScreen,
        }

        let Component = TAB_SCREENS[scene.route.key];

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

module.exports = Scene;
