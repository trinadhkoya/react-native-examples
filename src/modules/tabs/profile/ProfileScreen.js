// ========================================================
// ProfileScreen
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

// ========================================================
// Component
// ========================================================

class ProfileScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text style={styles.text}>ProfileScreen</Text>
            </View>
        );
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
        backgroundColor: STYLES.COLORS.BALTIC_SEA_BLUE,
    },
    text: {
        color: STYLES.COLORS.WHITE,
    }
});

// ========================================================
// Exports
// ========================================================

module.exports = ProfileScreen;

