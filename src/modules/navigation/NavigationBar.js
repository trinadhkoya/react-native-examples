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

// first party
import NavigationBarBackButton from '../UIBars/navigationBar/NavigationBarBackButton';
import NavigationModalButton from '../UIBars/navigationBar/NavigationModalButton';

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
                onNavigateBack={this.props.onNavigate}
                renderLeftComponent={this._renderLeftComponent}
                renderTitleComponent={this._renderTitleComponent}
                renderRightComponent={this._renderRightComponent}
            />
        );
    }

    _renderLeftComponent(props) {
        if (props.scene.index === 0) {
            return null
        }

        return (
            <NavigationBarBackButton {...props} />
        )
    }

    _renderTitleComponent() {
        return (
            <NavigationHeader.Title>
                React Native Examples
            </NavigationHeader.Title>
        );
    }

     _renderRightComponent(props) {
        return (
            <NavigationModalButton {...props} />
        )
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    // ...
});


// ========================================================
// Exports
// ========================================================

module.exports = NavigationBar;

