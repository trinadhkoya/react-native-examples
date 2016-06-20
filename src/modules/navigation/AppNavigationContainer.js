// ========================================================
// AppNavigationContainer
// ========================================================

// core
import React, {
    Component
} from 'react';

import {
  StyleSheet,
  Text,
  View,
  NavigationExperimental,
} from 'react-native';


const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

// third party
import { connect } from 'react-redux';

// first party
import * as ACTIONS from '../../constants/ActionTypes';
import * as NavActions from '../navigation/NavigationActions';
import Scene from './Scene';
import Dock from './Dock';

// ========================================================
// Component
// ========================================================

class AppNavigationContainer extends Component {

    constructor(props) {
        super(props)

        this._renderScene = this._renderScene.bind(this)
    }

    render() {

        const { navigationState } = this.props;
        const { tabs } = navigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = navigationState[tabKey];

        return (
            <View style={styles.container}>
                <NavigationCardStack
                    key={'stack_' + tabKey}
                    onNavigate={this.props.onNavigate}
                    navigationState={scenes}
                    renderScene={this._renderScene}
                    style={styles.navigationCardStack}
                />

                <Dock
                    navigationState={this.props.navigationState}
                    onNavigate={this.props.onNavigate}
                    scenes={scenes}
                />
            </View>
        );
    }

    _renderScene(sceneProps) {
        return (
            <Scene {...sceneProps} />
        )
    }
}

// ========================================================
// Styles
// ========================================================
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    navigationCardStack: {
        flex: 20,
    },
});


// ========================================================
// Redux Configurations
// ========================================================

// pass state to props of this component
const mapStateToProps = (state) => {
    return {
        navigationState: state.navigationState,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onNavigate: (action) => {
            switch (action.type) {
                case ACTIONS.BACK_ACTION:
                    return dispatch(NavActions.popRoute());
                case ACTIONS.PUSH_ROUTE:
                    return dispatch(NavActions.pushRoute(action.tabKey, action.route));
                case ACTIONS.SELECT_TAB:
                    return dispatch(NavActions.selectTab(action.tabKey));
                default:
                    break;
            }
        },
    }
}

// ========================================================
// Exports
// ========================================================

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigationContainer)

