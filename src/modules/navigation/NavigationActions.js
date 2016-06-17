// ========================================================
// Navigation Active
// ========================================================

'use strict'


// ========================================================
// Action Creators
// ========================================================

export const jumptToTab = (index) => (
    type: JUMP_TO_TAB,
    payload: {
        index: index,
    }
)

export const addToTabStack = (index) => (
    type: ADD_TO_TAB_STACK,
    payload: {
        index: index,
    }
)

