// ========================================================
// Navigation Active
// ========================================================

'use strict'

// ========================================================
// Convenience
// ========================================================

const JUMP_TO_TAB      = 'JUMP_TO_TAB';
const ADD_TO_TAB_STACK = 'ADD_TO_TAB_STACK';

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

