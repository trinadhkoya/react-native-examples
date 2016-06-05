// ========================================================
// NavigationBar
// ========================================================

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental
} from 'react-native';

const {
    Header: NavigationHeader,
} = NavigationExperimental;

// ========================================================
// Component
// ========================================================

class NavigationBar extends Component {

    constructor(props) {
        super(props);

        this._renderLeftComponent = this._renderLeftComponent.bind(this);
        this._renderTitleComponent = this._renderTitleComponent.bind(this);
        this._renderRightComponent = this._renderRightComponent.bind(this);
    }

    render() {
        return (
            <NavigationHeader
                {...this.props}
                style={styles.container}
                renderLeftComponent={this._renderLeftComponent}
                renderTitleComponent={this._renderTitleComponent}
                renderRightComponent={this._renderRightComponent}
            />
        );
    }

    _renderLeftComponent() {
        return null
    }

    _renderTitleComponent() {
        return (
            <NavigationHeader.Title>
                React Native Examples
            </NavigationHeader.Title>
        );
    }

     _renderRightComponent() {
        return null
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

// ========================================================
// Exports
// ========================================================

module.exports = NavigationBar;

