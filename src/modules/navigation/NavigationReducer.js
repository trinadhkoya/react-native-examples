// ========================================================
// NavigationReducer
// ========================================================

'use strict'

// core
import { NavigationExperimental } from 'react-native'
const {
  StateUtils: NavigationStateUtils
} = NavigationExperimental

// first party
import * as CONST from '../../constants/Navigation';
import * as ACTIONS from '../../constants/ActionTypes';

// const initialState = {
//     index: 0,
//     key: 'root',
//     children: [
//         // tab state
//         {
//             key: CONST.TABS.HOME,
//             index: 0,
//             icon: CONST.TAB_ICONS.HOME,
//             iconActive: CONST.TAB_ICONS.HOME_ACTIVE,
//             children:[
//                 // tab stack
//                 { key: CONST.TAB_SCREENS.HOME.HOME, dock: CONST.DOCKS.TAB_BAR }
//             ]
//         },
//         // tab state
//         {
//             key: CONST.TABS.SWIPER,
//             index: 0,
//             icon: CONST.TAB_ICONS.SWIPER,
//             iconActive: CONST.TAB_ICONS.SWIPER_ACTIVE,
//             children:[
//                 // tab stack
//                 { key: CONST.TAB_SCREENS.SWIPER.SWIPER, dock: CONST.DOCKS.TAB_BAR }
//             ]
//         },
//         // tab state
//         {
//             key: CONST.TABS.PROFILE,
//             index: 0,
//             icon: CONST.TAB_ICONS.PROFILE,
//             iconActive: CONST.TAB_ICONS.PROFILE_ACTIVE,
//             children:[
//                 // tab stack
//                 { key: CONST.TAB_SCREENS.PROFILE.PROFILE, dock: CONST.DOCKS.TAB_BAR }
//             ]
//         },
//     ],
// }

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: CONST.TAB_SCREENS.HOME.HOME,
            dock: CONST.DOCKS.TAB_BAR,
            icon: CONST.TAB_ICONS.HOME,
            iconActive: CONST.TAB_ICONS.HOME_ACTIVE,
        }
    ]
}


// ========================================================
// Reducer
// ========================================================

function NavigationReducer(state = initialState, action) {
    switch (action.type) {
        case ACTIONS.JUMP_TO_TAB:

            return {
                ...state,
                index: action.index,
            }

            // return NavigationStateUtils.jumpToIndex(state, action.index)

        case ACTIONS.ADD_TO_TAB_STACK:

            const { tab, tabStackChild } = action;

            return pushToTabStack(state, tab, tabStackChild)

        case 'RESET_STACK':

            return resetTabStack(state, action.payload.tab)

        case 'BACK':

            // let newState = pushTabChildState(state, action.payload.tab, action.payload.newChildState)

            // return newState;

            break;

        default:
            return state;
    }
}

// ========================================================
// Helpers
// ========================================================

function getTabState(state, tabIndex) {

    let tabState = state.children[tabIndex];

    return tabState;
}

function pushToTabStack(state, tabIndex, tabStackChild) {

    let tab             = getTabState(state, tabIndex);
    let tabStack        = tab.children;
    let topOfStackIndex = tab.children.length - 1;
    let topOfStack      = tabStack[topOfStackIndex];

    // check for duplicate state
    if ( topOfStack.key === tabStackChild.key ) {
        return state;
    }

    let tabSackState = {
        ...state,
        children: [
            ...state.children.slice(0, tabIndex),
            {
                ...tab,
                index: tab.index + 1,
                children: [
                    ...tabStack.slice(0, tabStack.length),
                    tabStackChild,
                ]
            },
            ...state.children.slice(tabIndex + 1),

        ]
    }

    return tabSackState;
}

function popFromTabStack(state, tabIndex) {

    let tab      = getTabState(state, tabIndex);
    let tabStack = tab.children;

    let tabSackState = {
        ...state,
        children: [
            ...state.children.slice(0, tabIndex),
            {
                ...tab,
                index: tab.index - 1,
                children: [
                    // remove last item from array
                    ...tabStack.slice(0, -1),
                ]
            },
            ...state.children.slice(tabIndex + 1),

        ]
    }

    return tabSackState;
}

function resetTabStack(state, tabIndex) {

    let tab      = getTabState(state, tabIndex);
    let tabStack = tab.children;

    let tabSackState = {
        ...state,
        children: [
            ...state.children.slice(0, tabIndex),
            {
                ...tab,
                index: 0,
                children: [
                    // reset to first item in stack
                    {
                        ...tabStack.slice(0, 1)[0]
                    }
                ]
            },
            ...state.children.slice(tabIndex + 1),

        ]
    }

    return tabSackState
}

module.exports = NavigationReducer;
