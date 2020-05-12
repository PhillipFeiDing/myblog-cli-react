import * as constants from './constants'
import { fromJS } from 'immutable'
import { MOBILE_LAYOUT_THRESHOLD } from '../pages/home/store/constants'

const defaultState = fromJS({
    authorName: null,
    isMobile: false,
    mobile: {
        showTag: false,
        showAboutMe: false
    }
})

export const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_AUTHOR_NAME:
            return state.set('authorName', action.authorName)
        case constants.UPDATE_LAYOUT:
            return state.set('isMobile', action.viewportWidth < MOBILE_LAYOUT_THRESHOLD ? true : false)
        case constants.SHOW_TAG_BOARD:
            return state.set('mobile', fromJS({showTag: action.show, showAboutMe: action.show ? false : state.get('mobile').toJS().showAboutMe}))
        case constants.SHOW_ABOUT_ME_BOARD:
            return state.set('mobile', fromJS({showTag: action.show ? false : state.get('mobile').toJS().showTag, showAboutMe: action.show}))
        default:
            return state
    }
}