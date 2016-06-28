*********************
React Native Examples
*********************

A few samples of some of the more interesting aspects of React Native.  This is just me exploring how Navigation Experimental works.  Couldn't have done it without the amazing works of :

[list here]

Quickstart
==========

1. clone the project
2. npm install
3. npm start
4. open ios/react_native_examples.xcodeproj

Branches
========

development
-----------

This branch shows how to create tabs with the CardStack component

feature/NavigationTransitioner
------------------------------

This branch illustrates how to crate the same effects of the CardStack with a more granular approach.  The idea here is that we can come up with a more central and capable navigation system with this approach.  Which one is best is really up to you and your needs.

One of the reasons I went with this aproach is because when I was resetting stacks it would look like this:

image here

But I wanted this transition to have the potential of looking a little different, which meant a more manual approach was required.  To do this, we add a property to the NavigationState called ``animation``.  And we say that it is by default equal to ``null``.  When we go to reset the routes, that is when we set it ``reset``.  A check is done inside of ``AppNavigationContainer`` and this will let us know if we should return the ``NavigationCard`` - which does the great thing that is the card swipe, or we go straight to rendering a card which, because it's just transitioner, transitioner has no animation and gives us a clean restart.  However, we are setting this is the reducer, which means that we do need to reset the value of ``animation`` for future calls or funky things start happening.

As a side not about using the NavigationTransitioner, all scenes fed to it do require a ``key`` prop.

Project Outline
===============

* code lives in the ``src`` directory
* Redux, React-Native 27, React-Redux,


Navigation
==========

.. code-block:: bash

    main.js                                (custom)
        ---> AppNavigation                 (custom)
             ---> MainScreen                 (custom)
                  ---->   NavigationView   (NavigationExperimental)
             ---> Dock                     (custom)

MainScreen
----------

.. code-block:: javascript

    // MainScreen.js

    const {
        View: NavigationView,
    } = NavigationExperimental;

    import {
        NavigationSceneRendererProps,
    } from 'NavigationTypeDefinition';

``NavigationView`` is good for tabs because it has no navigation animations.

**Required Props:**

* navigationState - navigation state of the containing view
* onNavigate - callback to navigation with an action
* renderScene -the scene to render

**Optional Props**

* Style - styles to add to the scene containing View


TabScreen
---------

``NavigationCardStack`` is used for a tab's stack. It provides an animation.


Workflow
--------

use remoteDev and the redux-remote-dev tools to watch and understand the flow of redux state.

1. start the remoteDev server

.. code-block:: javascript

    npm run remotedev

2.  open your remoteDev app (I use the Chrome app)




ES6 Notes
---------

- state is defined inside of the constructor
- class properties do not automatically bind to to the React class instance.  I opt to change the context of my class properties inside of the constructor.

Style Guide
-----------

- editorconfig
- spaces between spaces infinix when in arguments - good
- Domain Driven Design Project Organization

Resources
---------

https://github.com/planningcenter/react-patterns#component-organization

https://leanpub.com/understandinges6/read

https://toddmotto.com/react-create-class-versus-component/

http://www.newmediacampaigns.com/blog/refactoring-react-components-to-es6-classes

http://egorsmirnov.me/2015/06/14/react-and-es6-part2.html

https://rangle-io.gitbooks.io/react-native-workshop/content/book/navigation/navigation-experimental-details.html

https://coryrylan.com/blog/javascript-es6-class-syntax

https://medium.com/lexical-labs-engineering/redux-best-practices-64d59775802e#.z8ecs9zep

https://egghead.io/lessons/javascript-redux-simplifying-the-arrow-functions?course=building-react-applications-with-idiomatic-redux

`immutability`_

`Organizing React Components Nature v Domain`_
`Alternative React Folder Structure`_

.. _`Organizing React Components Nature v Domain`: http://marmelab.com/blog/2015/12/17/react-directory-structure.html
.. _`Alternative React Folder Structure`: https://gist.github.com/ryanflorence/daafb1e3cb8ad740b346

.. _`immutability`: https://www.sitepoint.com/immutability-javascript/



// Which sites did I have open when I was figuring out how this whole thing worked
// https://github.com/facebook/react-native/blob/0.28-stable/Libraries/CustomComponents/NavigationExperimental/NavigationCardStack.js
// https://github.com/facebook/react-native/blob/0.28-stable/Libraries/NavigationExperimental/NavigationAnimatedView.js
// https://github.com/facebook/react-native/blob/0.28-stable/Libraries/NavigationExperimental/NavigationTransitioner.js
// https://github.com/facebook/react-native/blob/0.28-stable/Libraries/NavigationExperimental/NavigationTypeDefinition.js
// https://github.com/facebook/react-native/blob/0.28-stable/Libraries/NavigationExperimental/Reducer/NavigationScenesReducer.js
// https://github.com/facebook/react-native/blob/b90b57c9a122f1500db18113d476b6ec4621eb65/Libraries/Animated/src/Easing.js
// http://xaedes.de/dev/transitions/ - illustrates the Easing module
// https://facebook.github.io/react-native/docs/animated.html - documentation showing example of Easing

// https://github.com/ericvicenti/navigation-rfc/blob/master/Docs/Navigation.md
// The above actually does a really nice job of explaining some stuff about NavigationExperimental
// but where it falls short is the fact that it provides no context.

// https://github.com/facebook/react-native/commit/1dc33b5
// example of a composed NavigationExperimental

// ========================================================
// STRUCTURE ATTEMPT ONE
// ========================================================


// NAVIGATION REDUCER
{
    index: 0,
    key: 'root',
    routes: [
        {
            key: CONST.TAB_SCREENS.HOME.HOME,
            dock: CONST.DOCKS.TAB_BAR,
            icon: CONST.TAB_ICONS.HOME,
            iconActive: CONST.TAB_ICONS.HOME_ACTIVE,
        },
        {
            key: CONST.TAB_SCREENS.SWIPER.SWIPER,
            dock: CONST.DOCKS.TAB_BAR,
            icon: CONST.TAB_ICONS.SWIPER,
            iconActive: CONST.TAB_ICONS.SWIPER_ACTIVE,
        }
    ]
}

// SCENE

{
    index: 0,
    isStale: false,
    key: "scene_HomeScreen"
    routes: [
        {
            dock:"TabBar",
            icon: 1,
            iconActive: 2,
            key: "HomeScreen"
        }
    ]
}

// SCENES
// Same as above, just done for each of the routes in the NavigationState


// ========================================================
// STRUCTURE ATTEMPT TWO
// ========================================================

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            index: 0,
            key: CONST.TAB_SCREENS.HOME.HOME,
            dock: CONST.DOCKS.TAB_BAR,
            icon: CONST.TAB_ICONS.HOME,
            iconActive: CONST.TAB_ICONS.HOME_ACTIVE,
            routes: [
                { key: 'HomeScreenTwo', dock: CONST.DOCKS.TAB_BAR, icon: CONST.TAB_ICONS.HOME, iconActive: CONST.TAB_ICONS.HOME_ACTIVE,}
            ]
        },
        {
            index: 0,
            key: CONST.TAB_SCREENS.SWIPER.SWIPER,
            dock: CONST.DOCKS.TAB_BAR,
            icon: CONST.TAB_ICONS.SWIPER,
            iconActive: CONST.TAB_ICONS.SWIPER_ACTIVE,
            routes: [
                { key: 'SwiperScreen', dock: CONST.DOCKS.TAB_BAR, icon: CONST.TAB_ICONS.SWIPER, iconActive: CONST.TAB_ICONS.SWIPER_ACTIVE,}
            ]
        }
    ]
}


// ========================================================
// ANOTHER EXAMPLE OF HOW THIS WORKS
// ========================================================

// I am going through this example:  https://github.com/facebook/react-native/commit/1dc33b5 and I am breaking
// it down into a way that is a little easier to understand.

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;


// INITIAL STATE === createAppNavigationState()

const initialState =  {
    // Three tabs.
    tabs: {
        index: 0,
        routes: [
            {key: 'home'},
            {key: 'about'},
            {key: 'profile'},
        ],
    },
    // Scenes for the `apple` tab.
    home: {
        index: 0,
        routes: [
            {key: 'HomeScreen'}
        ],
    },
    // Scenes for the `banana` tab.
    about: {
        index: 0,
        routes: [
            {key: 'AboutScreen'}
        ],
    },
    // Scenes for the `orange` tab.
    profile: {
        index: 0,
        routes: [
            {key: 'profileScreen'}
        ],
    },
}

// NavigationStateReducer === updateAppNavigationState()

function NavigationStateReducer(state = initialstate, action) {

    switch (action.type) {
        case 'PUSH':
            const route      = action.route;
            const tabs       = state.tabs;
            const tabKey     = tabs.routes[tabs.key].key;
            const scenes     = state[tabKey];
            const nextScenes = NavigationStateUtils.push(scenes, route);

            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;

        case 'POP':
            const route      = action.route;
            const tabs       = state.tabs;
            const scenes     = state[tabKey];
            const nextScenes = NavigationStateUtils.pop(scenes);

            if (scenes !== nextScenes) {
                return {
                    ...state,
                    [tabKey]: nextScenes,
                };
            }
            break;

        case 'SELECT_TAB':
            const tabKey = action.tabKey;
            const tabs   = NavigationStateUtils.jumpTo(state.tabs, tabKey);

            if (tabs !== state.tabs) {
                return {
                    ...state,
                    tabs,
                }
            }
    }

    return state;
}

// App (MAIN.JS) === YourApplication

class App extends Component {
    constructor(props) {
        super(props);

        this._onNavigate = this._onNavigate.bind(this);
    }

    render() {
        return (
            <Navigator
                navigationState={this.props.navigationState}
                onNavigate={this._onNavigate}
            />
        )
    }

    _onNavigate() {
        // do the normal stuff that this would do
    }
}

// Navigation === YourNavigator

class Navigator extends Component {

    constructor(props) {
        super(props)

        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        const { navigationState } = this.props;
        const { tabs } = navigationState;
        const tabKey = tabs.routes[tabs.index].key;
        const scenes = navigationState[tabKey];

        return (
            <View style={styles.navigator}>
                <NavigationCardStack
                    key={'stack_' + tabKey}
                    onNavigate={this.props.onNavigate}
                    navigationState={scenes}
                    renderScene={this._renderScene}
                    style={styles.navigatorCardStack}
                />
                <Dock
                  navigationState={tabs}
                />
            </View>
        );

    }
}

// SCENE === YourScrene

class Scene extends Component {
    constructor(props) {
        super(props)

        this._renderScene = this._renderScene.bind(this);
    }

    render() {
        return (
            <View style={styles.navigator}>
                <Text>Scene</Text>
            </View>
        );
    }
}

// DOCK === YourTabs

class Dock extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={styles.navigator}>
                <Text>Scene</Text>
            </View>
        );
    }
}




