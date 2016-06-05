// ========================================================
// RNETouchable
// ========================================================

// core
import React from 'react';

import {
    TouchableHighlight,
    TouchableNativeFeedback,
    Platform,
} from 'react-native';

// ========================================================
// Component
// ========================================================

// return platform specific button
const RNETouchable = Platform.OS === 'ios'
    ? TouchableHighlight
    : TouchableNativeFeedback

// ========================================================
// Exports
// ========================================================

module.exports = RNETouchable;

