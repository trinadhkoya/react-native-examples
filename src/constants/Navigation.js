// ========================================================
// NavigationReducer
// ========================================================

'use strict'

import * as ICONS from './icons';

export const VERTICAL = 'vertical';
export const HORIZONTAL = 'horizontal';

export const TAB = {
    HOME   : 'home',
    INFO   : 'info',
    PROFILE: 'profile',
    MODAL  : 'modal',
}

export const MODALS = {
    MODAL_SCREEN: 'ModalScreen',
    MODAL_SCREEN_ALERT: 'ModalScreenAlert'
}

export const MODAL_VIEW_STYLES = {
    PAGE_SHEET: 'PAGE_SHEET',
    FULL_SCREEN: 'FULL_SCREEN',
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
    MODAL: {
        BASE: 'ModalScreen'
    }
}

export const SCREEN_TYPES = {
    CARD: 'card',
    MODAL: 'modal',
}

export const DOCK = {
    TAB_BAR: 'TabBar',
}

export const HOME_ROUTES = {
    HOME_TWO: {
        key: TAB_SCENE.HOME.HOME_TWO,
        dock: DOCK.TAB_BAR,
        navigationBar: true,
        inactiveTabIcon: ICONS.HOME,
        activeTabIcon: ICONS.HOME_ACTIVE,
    },
    HOME_THREE: {
        key: TAB_SCENE.HOME.HOME_THREE,
        dock: DOCK.TAB_BAR,
        navigationBar: true,
        inactiveTabIcon: ICONS.HOME,
        activeTabIcon: ICONS.HOME_ACTIVE,
    }
}
