// ========================================================
// NavigationReducer
// ========================================================

'use strict'

export const TAB = {
    HOME   : 'Home',
    INFO   : 'Info',
    PROFILE: 'Profile',
}

export const TAB_SCENE = {
    HOME: {
        BASE: 'HomeScreen',
        HOME_TWO: 'HomeScreenTwo',
        HOME_THREE: 'HomeScreenThree'
    },
    INFO: {
        BASE: 'InfoScreen'
    },
    PROFILE: {
        BASE: 'ProfileScreen'
    },
}

export const DOCK = {
    TAB_BAR: 'TabBar',
}

export const HOME_ROUTES = {
    HOME_TWO: {
        key: TAB_SCENE.HOME.HOME_TWO,
        dock: DOCK.TAB_BAR,
        inactiveTabIcon: TAB_ICONS.HOME,
        activeTabIcon: TAB_ICONS.HOME_ACTIVE,
    },
    HOME_THREE: {
        key: TAB_SCENE.HOME.HOME_THREE,
        dock: DOCK.TAB_BAR,
        inactiveTabIcon: TAB_ICONS.HOME,
        activeTabIcon: TAB_ICONS.HOME_ACTIVE,
    }
}
