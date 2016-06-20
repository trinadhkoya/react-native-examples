// ========================================================
// Navigation Active
// ========================================================

'use strict'

import * as ACTIONS from '../../constants/ActionTypes';


// ========================================================
// Action Creators
// ========================================================

export const pushRoute = (route) => {
    return {
        type: ACTIONS.PUSH,
        route: route
    }
}

export const popRoute = (route) => {
    return {
        type: ACTIONS.POP,
        route: route
    }
}

export const selectTab = (tabKey) => {
    return {
        type: ACTIONS.SELECT_TAB,
        tab: tabKey
    }
}

