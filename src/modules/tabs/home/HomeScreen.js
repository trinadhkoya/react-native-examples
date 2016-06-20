// ========================================================
// HomeScreen
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

class HomeScreen extends Component {

    constructor(props) {
        super(props);

        this._handleHomeScreenClick = this._handleHomeScreenClick.bind(this);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text>HomeScreen</Text>

                <RNETouchable
                    accessibilityTraits="button"
                    onPress={this._handleHomeScreenClick}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Navigate To HomeScreen 2</Text>
                </RNETouchable>
            </View>
        );
    }

    _handleHomeScreenClick() {
        const { onNavigate } = this.props;

        onNavigate({ type: ACTIONS.PUSH_ROUTE, route: NAV.HOME_ROUTES.HOME_TWO });
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
        backgroundColor: STYLES.COLORS.ANAKIWA_BLUE,
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

module.exports = HomeScreen;

