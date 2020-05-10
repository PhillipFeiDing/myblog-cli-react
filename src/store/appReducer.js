import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    authorName: null
})

export const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_AUTHOR_NAME:
            return state.set('authorName', action.authorName)
        default:
            return state
    }
}