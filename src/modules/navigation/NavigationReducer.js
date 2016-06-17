// ========================================================
// NavigationReducer
// ========================================================
'use strict'

const initialState = {
    key: 'tabs',
    index: 0,
    children: [
        // tab state
        {
            key: TABS.HOME,
            index: 0,
            icon: TAB_ICONS.HOME,
            iconActive: TAB_ICONS.HOME_ACTIVE,
            children:[
                // tab stack
                { key: TAB_SCREENS.HOME.HOME, dock: DOCKS.TAB_BAR }
            ]
        },
        // tab state
        {
            key: TABS.SWIPER,
            index: 0,
            icon: TAB_ICONS.SWIPER,
            iconActive: TAB_ICONS.SWIPER_ACTIVE,
            children:[
                // tab stack
                { key: TAB_SCREENS.SWIPER.SWIPER, dock: DOCKS.TAB_BAR }
            ]
        },
        // tab state
        {
            key: TABS.PROFILE,
            index: 0,
            icon: TAB_ICONS.PROFILE,
            iconActive: TAB_ICONS.PROFILE_ACTIVE,
            children:[
                // tab stack
                { key: TAB_SCREENS.PROFILE.PROFILE, dock: DOCKS.TAB_BAR }
            ]
        },
    ],
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



// ========================================================
// Reducer
// ========================================================

function NavigationReducer(state = initialState, action) {

    switch (action.type) {
        case 'JUMP_TO_TAB':

            return {
                ...state,
                index: action.payload.index,
            }

        case 'ADD_TO_TAB_STACK':

            const { tab, tabStackChild } = action.payload;

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

module.exports = NavigationReducer;
