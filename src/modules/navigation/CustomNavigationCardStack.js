// ========================================================
// CustomNavigationCardStack
// ========================================================

'use strict';

/**
 * A controlled navigation view that renders a stack of cards.
 *
 *     +------------+
 *   +-+            |
 * +-+ |            |
 * | | |            |
 * | | |  Focused   |
 * | | |   Card     |
 * | | |            |
 * +-+ |            |
 *   +-+            |
 *     +------------+
 */

// core
const NavigationTransitioner = require('NavigationTransitioner');
const NavigationCard = require('NavigationCard');
const NavigationCardStackStyleInterpolator = require('NavigationCardStackStyleInterpolator');
const NavigationCardStackPanResponder = require('NavigationCardStackPanResponder');
const NavigationPropTypes = require('NavigationPropTypes');
const React = require('React');
const StyleSheet = require('StyleSheet');
const View = require('View');

const {PropTypes} = React;
const {Directions} = NavigationCardStackPanResponder;

// ========================================================
// Component
// ========================================================

class CustomNavigationCardStack extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentWillMount() {
        this._render = this._render.bind(this);
        this._renderScene = this._renderScene.bind(this);
    }

    render() {

        const configTransition = { duration: this.props.animation_duration };

        return (
            <NavigationTransitioner
                configureTransition={ () => { return configTransition }}
                navigationState={this.props.navigationState}
                render={this._render}
                style={this.props.style}
            />
        );
    }

    _render(props) {
        const {
            renderHeader
        } = this.props;

        const header = renderHeader && renderHeader(props);

        const scenes = props.scenes.map(scene => this._renderScene({
            ...props,
            scene,
        }));

        return (
            <View
                style={styles.container}>
                <View
                    style={styles.scenes}>
                    {scenes}
                </View>
                {header}
            </View>
        );
    }

    _renderScene(props) {
        const isVertical = this.props.direction === 'vertical';

        const style = isVertical ?
            NavigationCardStackStyleInterpolator.forVertical(props) :
            NavigationCardStackStyleInterpolator.forHorizontal(props);

        const panHandlersProps = {
            ...props,
            onNavigateBack: this.props.onNavigateBack,
            gestureResponseDistance: this.props.gestureResponseDistance,
        };

        let panHandlers = null;

        if (this.props.enableGestures) {
            const panHandlersProps = {
                ...props,
                onNavigateBack: this.props.onNavigateBack,
                gestureResponseDistance: this.props.gestureResponseDistance,
            };

            panHandlers = isVertical ?
                NavigationCardStackPanResponder.forVertical(panHandlersProps) :
                NavigationCardStackPanResponder.forHorizontal(panHandlersProps);
        }

        return (
            <NavigationCard
                {...props}
                key={'card_' + props.scene.key}
                panHandlers={panHandlers}
                renderScene={this.props.renderScene}
                style={[style, this.props.cardStyle]}
            />
        );
    }
}

// ========================================================
// Styles
// ========================================================

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column-reverse',
    },
    scenes: {
        flex: 1,
    },
});

// ========================================================
// Exports
// ========================================================

module.exports = CustomNavigationCardStack;
