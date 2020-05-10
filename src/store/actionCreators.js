import axios from 'axios'
import * as apis from '../constants'
import * as constants from './constants'

const fillAuthorName = (authorName) => ({
    type: constants.FILL_AUTHOR_NAME,
    authorName
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