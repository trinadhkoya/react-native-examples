// ========================================================
// Navigation Active
// ========================================================

'use strict'

import * as ACTIONS from '../../constants/ActionTypes';


// ========================================================
// Action Creators
// ========================================================

export const pushRoute = (tabKey, route) => {
    return {
        type: ACTIONS.PUSH_ROUTE,
        tabKey: tabKey,
        route: route,
    }
}

export const popRoute = (route) => {
    return {
        type: ACTIONS.POP_ROUTE,
        route: route
    }
}

export const selectTab = (tabKey) => {
    return {
        type: ACTIONS.SELECT_TAB,
        tab: tabKey
    }
}

