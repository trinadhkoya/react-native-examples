// ========================================================
// Navigation Active
// ========================================================

'use strict'

import * as ACTIONS from '../../constants/ActionTypes';


// ========================================================
// Action Creators
// ========================================================

export const jumptToTab = (index) => (
    type: ACTIONS.JUMP_TO_TAB,
    payload: {
        index: index,
    }
)

export const addToTabStack = (index) => (
    type: ACTIONS.ADD_TO_TAB_STACK,
    payload: {
        index: index,
    }
)

