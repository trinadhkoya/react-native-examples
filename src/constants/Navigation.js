// ========================================================
// NavigationReducer
// ========================================================

'use strict'

export const TABS = {
    HOME   : 'Home',
    SWIPER : 'Swiper',
    PROFILE: 'Profile',
}

export const TAB_ICONS = {
    HOME           : require('../modules/navigation/tabbar/images/icon-home.png'),
    HOME_ACTIVE    : require('../modules/navigation/tabbar/images/icon-home-active.png'),
    SWIPER         : require('../modules/navigation/tabbar/images/icon-info.png'),
    SWIPER_ACTIVE  : require('../modules/navigation/tabbar/images/icon-info-active.png'),
    PROFILE        : require('../modules/navigation/tabbar/images/icon-profile.png'),
    PROFILE_ACTIVE : require('../modules/navigation/tabbar/images/icon-profile-active.png'),
}

export const TAB_SCREENS = {
    HOME: {
        HOME: 'HomeScreen'
    },
    SWIPER: {
        SWIPER: 'SwiperScreen'
    },
    PROFILE: {
        PROFILE: 'ProfileScreen'
    },
}

export const DOCKS = {
    TAB_BAR: 'TabBar',
}
