import axios from 'axios'
import * as apis from '../constants'
import * as constants from './constants'

const fillAuthorName = (authorName) => ({
    type: constants.FILL_AUTHOR_NAME,
    authorName
})

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

export const getAuthorName = () => {
    return async (dispatch) => {
        try {
            const authorName = (await axios.get(apis.AUTHOR_NAME)).data.data.name
            dispatch(fillAuthorName(authorName))
        } catch {
            window.alert('Request getAuthorName() failed.')
        }
    }
}