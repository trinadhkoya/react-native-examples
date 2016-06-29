// ========================================================
// NavigationModalButton
// ========================================================

'use strict';

// core
import React, { Component } from 'react';
import { StyleSheet, Image, Platform } from 'react-native';

// first party
import { ICONS, ACTIONS } from '../../../constants/constants';
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
    const tabKey = props.navigationState.key

    props.onNavigate({ type: ACTIONS.BACK_ACTION, tabKey: tabKey });
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
        height: 24,
        width: 24,
        margin: Platform.OS === 'ios' ? 10 : 16,
        resizeMode: 'contain'
    }
});


// ========================================================
// Exports
// ========================================================

module.exports = NavigationModalButton;
