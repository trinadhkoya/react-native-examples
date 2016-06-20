// ========================================================
// NavigationReducer
// ========================================================

'use strict'

// core
import { NavigationExperimental } from 'react-native'

const {
    CardStack: NavigationCardStack,
    Header: NavigationHeader,
    PropTypes: NavigationPropTypes,
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

// first party
import CONST, { TAB_ICONS, TAB_SCENE, DOCK  } from '../../constants/Navigation';
import * as ACTIONS from '../../constants/ActionTypes';

const initialState =  {
    // Three tabs.
    tabs: {
        index: 0,
        routes: [
            {key: 'home'},
            {key: 'info'},
            {key: 'profile'},
        ],
    },
    // Scenes for the `home` tab.
    home: {
        index: 0,
        key: 'home',
        routes: [
            {
                key: TAB_SCENE.HOME.BASE,
                dock: DOCK.TAB_BAR,
                inactiveTabIcon: TAB_ICONS.HOME,
                activeTabIcon: TAB_ICONS.HOME_ACTIVE,
            }
        ],
    },
    // Scenes for the `info` tab.
    info: {
        index: 0,
        key: 'info',
        routes: [
            {
                key: TAB_SCENE.INFO.BASE,
                dock: DOCK.TAB_BAR,
                inactiveTabIcon: TAB_ICONS.INFO,
                activeTabIcon: TAB_ICONS.INFO_ACTIVE,
            }
        ],
    },
    // Scenes for the `profile` tab.
    profile: {
        index: 0,
        key: 'profile',
        routes: [
            {
                key: TAB_SCENE.PROFILE.BASE,
                dock: DOCK.TAB_BAR,
                inactiveTabIcon: TAB_ICONS.PROFILE,
                activeTabIcon: TAB_ICONS.HOME_ACTIVE,
            }
        ],
    },
}

// ========================================================
// Reducer
// ========================================================

function NavigationReducer(state = initialState, action) {
    switch (action.type) {
        // push to tab scene stack
        case ACTIONS.PUSH_ROUTE: {
            const scenes     = state[action.tabKey];
            const nextScenes = NavigationStateUtils.push(scenes, action.route);

            if (scenes !== nextScenes) {
                return {
                   ...state,
                   [action.tabKey]: nextScenes,
                };
            }
            break;
        }

        // pop from tab scene stack
        case ACTIONS.POP_ROUTE: {
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
        }

        // navigate to a new tab stack
        case ACTIONS.SELECT_TAB: {
            // returns an index <number>
            const nextTabs  = NavigationStateUtils.jumpTo(state.tabs, action.tab);

            if (nextTabs !== state.tabs) {
                return {
                    ...state,
                    tabs: nextTabs,
                }
            }
        }
    }

    return state;
}

// ========================================================
// Helpers
// ========================================================

// function getTabState(state, tabIndex) {

//     let tabState = state.children[tabIndex];

//     return tabState;
// }

// function pushToTabStack(state, tabIndex, tabStackChild) {

//     let tab             = getTabState(state, tabIndex);
//     let tabStack        = tab.children;
//     let topOfStackIndex = tab.children.length - 1;
//     let topOfStack      = tabStack[topOfStackIndex];

//     // check for duplicate state
//     if ( topOfStack.key === tabStackChild.key ) {
//         return state;
//     }

//     let tabSackState = {
//         ...state,
//         children: [
//             ...state.children.slice(0, tabIndex),
//             {
//                 ...tab,
//                 index: tab.index + 1,
//                 children: [
//                     ...tabStack.slice(0, tabStack.length),
//                     tabStackChild,
//                 ]
//             },
//             ...state.children.slice(tabIndex + 1),

//         ]
//     }

//     return tabSackState;
// }

// function popFromTabStack(state, tabIndex) {

//     let tab      = getTabState(state, tabIndex);
//     let tabStack = tab.children;

//     let tabSackState = {
//         ...state,
//         children: [
//             ...state.children.slice(0, tabIndex),
//             {
//                 ...tab,
//                 index: tab.index - 1,
//                 children: [
//                     // remove last item from array
//                     ...tabStack.slice(0, -1),
//                 ]
//             },
//             ...state.children.slice(tabIndex + 1),

//         ]
//     }

//     return tabSackState;
// }

// function resetTabStack(state, tabIndex) {

//     let tab      = getTabState(state, tabIndex);
//     let tabStack = tab.children;

//     let tabSackState = {
//         ...state,
//         children: [
//             ...state.children.slice(0, tabIndex),
//             {
//                 ...tab,
//                 index: 0,
//                 children: [
//                     // reset to first item in stack
//                     {
//                         ...tabStack.slice(0, 1)[0]
//                     }
//                 ]
//             },
//             ...state.children.slice(tabIndex + 1),

//         ]
//     }

//     return tabSackState
// }

module.exports = NavigationReducer;
