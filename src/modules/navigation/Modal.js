// ========================================================
// Modal
// ========================================================

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions
} from 'react-native';

// first party
import { STYLES } from '../../constants/constants';
import ModalScreen from '../tabs/modal/ModalScreen';

// ========================================================
// Component
// ========================================================

class Modal extends Component {

    constructor(props) {
        super(props);

        this.modalAnimationStyles.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.navigationState.isModalActive) {
            this.toggleModal(nextProps.navigationState.isModalActive);
        } else {
            this.toggleModal(nextProps.navigationState.isModalActive);
        }
    }

    render() {
        const { navigationState, onNavigate, scene } = this.props;

        // const TAB_SCREENS = {
        //     HomeScreen: HomeScreen,
        //     HomeScreenTwo: HomeScreenTwo,
        //     HomeScreenThree: HomeScreenThree,
        //     InfoScreen: InfoScreen,
        //     ProfileScreen: ProfileScreen,
        //     ModalScreen: ModalScreen,
        // }

        // let Component = TAB_SCREENS[scene.route.key];

        return (
            <Animated.View style={[ styles.container, this.modalAnimationStyles() ]}>
                <ModalScreen navigationState={navigationState} onNavigate={onNavigate}/>
            </Animated.View>
        )
    }

    modalAnimationStyles() {
        return {
            opacity: this.props.navigationState.animation,
            height: this.props.navigationState.animation,
        }
    }

    toggleModal(isActive) {
        const { navigationState } = this.props;

        let initialValue = isActive ? 0 : Dimensions.get('window').height;
        let finalValue   = isActive ? Dimensions.get('window').height : 0;

        this.props.navigationState.animation.setValue(initialValue);

        Animated.spring(
            this.props.navigationState.animation,
            {
                toValue: finalValue,
            }
        ).start();
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'absolute',
        bottom: 0,
        left: 0,
        overflow: 'hidden', // makes it so the aimation dispears instead of lingers
        backgroundColor: STYLES.COLORS.WHITE,
        width: Dimensions.get('window').width,
    },
});

// ========================================================
// Exports
// ========================================================

module.exports = Modal;
