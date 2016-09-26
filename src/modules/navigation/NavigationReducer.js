// ========================================================
// NavigationReducer
// ========================================================

'use strict'

// core
import { NavigationExperimental, Animated } from 'react-native'

const {
    StateUtils: NavigationStateUtils,
} = NavigationExperimental;

// first party
import { NAV, ICONS, ACTIONS } from '../../constants/constants';

const initialState =  {
     modal: {
        isModalActive: false,
        animation: new Animated.Value(0),
        modalKey: NAV.MODALS.MODAL_SCREEN,
        modalViewStyle: NAV.MODAL_VIEW_STYLES.FULL_SCREEN // fullscreen || pagesheet
    },
    // Three tabs.
    tabs: {
        index: 0,
        key: 'root',
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
        animation: null,
        routes: [
            {
                key: NAV.TAB_SCENE.HOME.BASE,
                dock: NAV.DOCK.TAB_BAR,
                navigationBar: true,
                inactiveTabIcon: ICONS.HOME,
                activeTabIcon: ICONS.HOME_ACTIVE,
            }
        ],
    },
    // Scenes for the `info` tab.
    info: {
        index: 0,
        key: 'info',
        animation: null,
        routes: [
            {
                key: NAV.TAB_SCENE.INFO.BASE,
                dock: NAV.DOCK.TAB_BAR,
                navigationBar: true,
                inactiveTabIcon: ICONS.INFO,
                activeTabIcon: ICONS.INFO_ACTIVE,
            }
        ],
    },
    // Scenes for the `profile` tab.
    profile: {
        index: 0,
        key: 'profile',
        animation: null,
        routes: [
            {
                key: NAV.TAB_SCENE.PROFILE.BASE,
                dock: NAV.DOCK.TAB_BAR,
                navigationBar: true,
                inactiveTabIcon: ICONS.PROFILE,
                activeTabIcon: ICONS.PROFILE_ACTIVE,
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

            const activeTabIndex  = state.tabs.index;
            const activeTabKey    = state.tabs.routes[activeTabIndex].key
            const scenes          = {
                ...state[activeTabKey],
                animation: action.animation,
            }
            const nextScenes      = NavigationStateUtils.push(scenes, action.route);

            if (scenes !== nextScenes) {
                return {
                   ...state,
                   [activeTabKey]: nextScenes,
                };
            }
            break;
        }

        // pop from tab scene stack
        case ACTIONS.POP_ROUTE: {
            const scenes     = state[action.tabKey];
            const nextScenes = NavigationStateUtils.pop(scenes);

            if (scenes !== nextScenes) {
                return {
                   ...state,
                   [action.tabKey]: nextScenes,
                };
            }
            break;
        }

        case ACTIONS.RESET_ROUTES: {
            const prevScenes        = {
                ...state[action.tabKey],
                animation: 'reset',
            }
            const nextChildren = prevScenes.routes.slice(0, 1);
            const nextIndex    = 0;
            const nextScenes   = NavigationStateUtils.reset(prevScenes, nextChildren, nextIndex);

            return {
               ...state,
               [action.tabKey]: nextScenes,
            };

            break;
        }

        // navigate to a new tab stack
        case ACTIONS.SELECT_TAB: {
            const nextTabs = NavigationStateUtils.jumpTo(state.tabs, action.tabKey);

            if (nextTabs !== state.tabs) {
                return {
                    ...state,
                    tabs: nextTabs,
                }
            }
            return state;
        }

        case ACTIONS.TOGGLE_MODAL: {
            return {
                ...state,
                modal: {
                    ...state.modal,
                    isModalActive: !state.modal.isModalActive,
                    modalKey: action.modalKey,
                    modalViewStyle: action.modalViewStyle,
                }
            }
        }

        default:
            return state;
    }
}

module.exports = NavigationReducer;
