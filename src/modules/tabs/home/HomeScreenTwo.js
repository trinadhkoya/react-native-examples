// ========================================================
// HomeScreenTwo
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
import * as ACTIONS from '../../../constants/ActionTypes';
import * as STYLES from '../../../constants/Styles';
import * as NAV from '../../../constants/Navigation';
import RNETouchable from '../../../common/components/RNETouchable';

// ========================================================
// Component
// ========================================================

class HomeScreenTwo extends Component {

    constructor(props) {
        super(props);

        this._handleHomeScreenTwoClick = this._handleHomeScreenTwoClick.bind(this);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text>HomeScreenTwo</Text>

                <RNETouchable
                    accessibilityTraits="button"
                    onPress={this._handleHomeScreenTwoClick}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Navigate To HomeScreen 3</Text>
                </RNETouchable>
            </View>
        );
    }

    _handleHomeScreenTwoClick() {
        const { onNavigate } = this.props;

        onNavigate({ type: ACTIONS.PUSH_ROUTE, route: NAV.HOME_ROUTES.HOME_THREE });
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: STYLES.COLORS.CONGRESS_BLUE,
    },
    button: {
        height: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        paddingRight: 10,
        paddingLeft: 10,
    }
});

// ========================================================
// Exports
// ========================================================

module.exports = HomeScreenTwo;

