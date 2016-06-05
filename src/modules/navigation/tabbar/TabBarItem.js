// ========================================================
// TabBarItem
// ========================================================

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';

// first party
import RNETouchable from '../../../common/components/RNETouchable';

// ========================================================
// Component
// ========================================================

class TabBarItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        const { isActive } = this.props

        let icon = isActive ? this.props.iconActive : this.props.icon

        return (
            <RNETouchable
                accessibilityTraits="button"
                onPress={this.props.onPress}
                style={styles.container}
            >
                <View style={styles.iconContainer}>

                    <Image source={icon} style={styles.tabIcon}/>

                    <Text style={styles.caption}>{this.props.caption}</Text>

                </View>
            </RNETouchable>
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
        backgroundColor: 'white',
    },
    tabIconContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    tabIcon: {
        width: 20,
        height: 20,
    },
    caption: {
        flex: 1,
        fontSize: 10,
        textAlign: 'center',
        alignSelf: 'center',
    }
});

// ========================================================
// Exports
// ========================================================

module.exports = TabBarItem;

