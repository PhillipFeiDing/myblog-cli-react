import * as constants from './constants'


export const showTagBoard = (show) => ({
    type: constants.SHOW_TAG_BOARD,
    show
})

export const showAboutMeBoard = (show) => ({
    type: constants.SHOW_ABOUT_ME_BOARD,
    show
})

export const showBackground = (show) => ({
    type: constants.SHOW_BACKGROUND,
    show
})

export const setFontFamily = (font) => ({
    type: constants.SET_FONT_FAMILY,
    font
})

export const setDisplay = (display) => ({
    type: constants.SET_DISPLAY,
    display
})