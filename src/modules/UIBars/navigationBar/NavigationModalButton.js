// ========================================================
// NavigationModalButton
// ========================================================

'use strict';

// core
import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

// first party
import { ICONS, ACTIONS, NAV } from '../../../constants/constants';
import * as NavActions from '../../navigation/NavigationActions';
import RNETouchable from '../../../common/components/RNETouchable';

// ========================================================
// Component
// ========================================================

const NavigationModalButton = (props) => (
    <RNETouchable
        accessibilityTraits="button"
        onPress={ () => { _onPress(props) } }
        style={styles.buttonContainer} >
        <Image
            style={styles.button}
            source={ICONS.SEARCH}
        />
    </RNETouchable>
);

function _onPress(props) {
    const tabKey = props.navigationState.key;

    props.onNavigate(NavActions.toggleModal('modalKey'));
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    buttonContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        height: 20,
        width: 20,
        margin: Platform.OS === 'ios' ? 10 : 16,
        resizeMode: 'contain'
    }
});


// ========================================================
// Exports
// ========================================================

module.exports = NavigationModalButton;
