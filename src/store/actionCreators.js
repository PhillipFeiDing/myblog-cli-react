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