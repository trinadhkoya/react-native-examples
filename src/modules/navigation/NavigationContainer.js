// ========================================================
// NavigationContainer
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
    Transitioner: NavigationTransitioner,
    Card: NavigationCard,
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

// third party
import { connect } from 'react-redux';

// first party
import { ACTIONS } from '../../constants/constants';
import * as NavActions from '../navigation/NavigationActions';
import Scene from './Scene';
import NavigationDock from './NavigationDock';
import NavigationBar from './NavigationBar';

// ========================================================
// Component
// ========================================================

class NavigationContainer extends Component {

    constructor(props) {
        super(props)

        this._renderCard = this._renderCard.bind(this);
        this._renderScene = this._renderScene.bind(this);
        this._renderNavigationBar = this._renderNavigationBar.bind(this);
    }

    render() {

        const { navigationState } = this.props;
        const { tabs } = navigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = navigationState[tabKey];
        const configTransition = { duration: scenes.animation === 'reset' ? 0 : 250 };

        return (
            <View style={styles.container}>
                <NavigationTransitioner
                    key={'stack_' + tabKey}
                    configureTransition={ () => { return configTransition }}
                    onNavigate={this.props.onNavigate}
                    navigationState={scenes}
                    renderOverlay={this._renderNavigationBar}
                    renderScene={this._renderCard}
                    style={styles.navigationCardStack}
                />

                <NavigationDock
                    navigationState={this.props.navigationState}
                    onNavigate={this.props.onNavigate}
                    scenes={scenes}
                />
            </View>
        );
    }

    _renderNavigationBar(sceneProps) {
        return (
            <NavigationBar {...sceneProps} />
        )
    }

    _renderCard(sceneProps) {
        return (
            <NavigationCard
                {...sceneProps}
                key={sceneProps.scene.route.key}
                renderScene={this._renderScene}
            />
        )
    }

    _renderScene(sceneProps) {
        return (
            <Scene
                {...sceneProps}
                key={sceneProps.scene.route.key}
            />
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
                    return dispatch(NavActions.pushRoute(action.route));
                case ACTIONS.RESET_ROUTES:
                    return dispatch(NavActions.resetRoutes(action.tabKey));
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

export default connect(mapStateToProps, mapDispatchToProps)(NavigationContainer)

