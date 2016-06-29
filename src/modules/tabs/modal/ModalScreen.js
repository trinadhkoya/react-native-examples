// ========================================================
// ModalScreen
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
import { STYLES } from '../../../constants/constants';

// ========================================================
// Component
// ========================================================

class ModalScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text>ModalScreen</Text>
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
        backgroundColor: STYLES.COLORS.TUMBLEWEED_BROWN,
    },
});

// ========================================================
// Exports
// ========================================================

module.exports = ModalScreen;

