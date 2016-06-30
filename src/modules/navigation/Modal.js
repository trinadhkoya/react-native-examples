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
import { STYLES, NAV } from '../../constants/constants';
import ModalScreen from '../tabs/modal/ModalScreen';
import ModalScreenAlert from '../tabs/modal/ModalScreenAlert';

// ========================================================
// Component
// ========================================================

class Modal extends Component {

    constructor(props) {
        super(props);

        this.modalAnimationStyles.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.animateFullScreenModal = this.animateFullScreenModal.bind(this);
        this.animatePageSheetModal = this.animatePageSheetModal.bind(this);
    }

    componentWillReceiveProps(nextProps) {
        const isPrevModalActive = this.props.navigationState.modal.isModalActive === true
        const isNextModalActive = nextProps.navigationState.modal.isModalActive === true

        if ( !isPrevModalActive && isNextModalActive || isPrevModalActive && !isNextModalActive ) {
            this.toggleModal(isNextModalActive);
        }
    }

    render() {
        const { navigationState, onNavigate, scene } = this.props;

        const MODALS = {
            ModalScreen: ModalScreen,
            ModalScreenAlert: ModalScreenAlert,
        }

        let Component = MODALS[navigationState.modal.modalKey];

        return (
            <Animated.View style={[ styles.container, this.modalAnimationStyles() ]}>
                <Component navigationState={navigationState} onNavigate={onNavigate}/>
            </Animated.View>
        )
    }

    modalAnimationStyles() {
        return {
            opacity: this.props.navigationState.modal.animation,
            height: this.props.navigationState.modal.animation,
        }
    }

    toggleModal(isActive) {
        const modalViewStyle = this.props.navigationState.modal.modalViewStyle;

        switch(modalViewStyle) {
            case NAV.MODAL_VIEW_STYLES.PAGE_SHEET:
                return this.animatePageSheetModal(isActive);
            default:
                return this.animateFullScreenModal(isActive);
        }
    }

    animateFullScreenModal(isActive) {
        const { navigationState } = this.props;

        let initialValue = isActive ? 0 : Dimensions.get('window').height;
        let finalValue   = isActive ? Dimensions.get('window').height : 0;

        this.props.navigationState.modal.animation.setValue(initialValue);

        Animated.spring(
            this.props.navigationState.modal.animation,
            {
                toValue: finalValue,
            }
        ).start();
    }

    animatePageSheetModal(isActive) {
        const { navigationState } = this.props;

        let initialValue = isActive ? 0 : Dimensions.get('window').height;
        let finalValue   = isActive ? Dimensions.get('window').height : 0;

        this.props.navigationState.modal.animation.setValue(initialValue);

        Animated.spring(
            this.props.navigationState.modal.animation,
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
