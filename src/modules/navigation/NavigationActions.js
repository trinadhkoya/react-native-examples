// ========================================================
// Navigation Active
// ========================================================

'use strict'

import { ACTIONS } from '../../constants/constants';


// ========================================================
// Action Creators
// ========================================================

export const pushRoute = (route) => {
    return {
        type: ACTIONS.PUSH_ROUTE,
        route: route,
    }
}

export const popRoute = (tabKey) => {
    return {
        type: ACTIONS.POP_ROUTE,
        tabKey: tabKey
    }
}

export const resetRoutes = (tabKey) => {
    return {
        type: ACTIONS.RESET_ROUTES,
        tabKey: tabKey,
    }
}

export const selectTab = (tabKey) => {
    return {
        type: ACTIONS.SELECT_TAB,
        tabKey: tabKey
    }
}

