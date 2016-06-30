// ========================================================
// ModalScreenAlert
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
import { STYLES, NAV } from '../../../constants/constants';
import * as NavActions from '../../navigation/NavigationActions';
import RNETouchable from '../../../common/components/RNETouchable';

// ========================================================
// Component
// ========================================================

class ModalScreenAlert extends Component {

    constructor(props) {
        super(props);

        this._onPress = this._onPress.bind(this);
    }

    render() {

        const { onNavigate, navigationState } = this.props

        return (
            <View style={styles.container}>
                <Text>ModalScreenAlert</Text>

                <RNETouchable
                    accessibilityTraits="button"
                    onPress={ () => { this._onPress() } }
                    style={styles.buttonContainer} >
                    <Text>Close</Text>
                </RNETouchable>

            </View>
        );
    }

    _onPress() {
        const tabKey = this.props.navigationState.key

        this.props.onNavigate(NavActions.toggleModal(NAV.MODALS.MODAL_SCREEN_ALERT, NAV.MODAL_VIEW_STYLES.PAGE_SHEET));
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

module.exports = ModalScreenAlert;

