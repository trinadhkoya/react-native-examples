// ========================================================
// HomeScreenThree
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
import * as STYLES from '../../../constants/Styles';
import RNETouchable from '../../../common/components/RNETouchable';

// ========================================================
// Component
// ========================================================

class HomeScreenThree extends Component {

    constructor(props) {
        super(props);

        this._handleButtonPress = this._handleButtonPress.bind(this);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text>HomeScreenThree</Text>

                <RNETouchable
                    accessibilityTraits="button"
                    onPress={this._handleButtonPress}
                    style={styles.button}
                >
                    <Text style={styles.buttonText}>Reset HomeScreens</Text>
                </RNETouchable>
            </View>
        );
    }

    _handleButtonPress() {
        const { onNavigate } = this.props;

        onNavigate({
            type: 'RESET_STACK',
            payload: {
                tab: 0,
            }
        });
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
        backgroundColor: STYLES.COLORS.FESTIVAL_YELLOW,
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

module.exports = HomeScreenThree;

