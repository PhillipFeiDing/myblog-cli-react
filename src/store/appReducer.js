import * as constants from './constants'
import { fromJS } from 'immutable'
import { MOBILE_LAYOUT_THRESHOLD } from '../pages/home/store/constants'

const defaultState = fromJS({
    isMobile: false,
    mobile: {
        showTag: false,
        showAboutMe: false
    },
    showBackground: true,
    fontFamily: 'Arial',
    display: 'Dark'
})

export const reducer = (state=defaultState, action) => {
    switch (action.type) {
        case constants.UPDATE_LAYOUT:
            return state.set('isMobile', action.viewportWidth < MOBILE_LAYOUT_THRESHOLD ? true : false)
        case constants.SHOW_TAG_BOARD:
            return state.set('mobile', fromJS({showTag: action.show, showAboutMe: action.show ? false : state.get('mobile').toJS().showAboutMe}))
        case constants.SHOW_ABOUT_ME_BOARD:
            return state.set('mobile', fromJS({showTag: action.show ? false : state.get('mobile').toJS().showTag, showAboutMe: action.show}))
        case constants.SHOW_BACKGROUND:
            return state.set('showBackground', action.show)
        case constants.SET_FONT_FAMILY:
            return state.set('fontFamily', action.font)
        case constants.SET_DISPLAY:
            return state.set('display', action.display)
        default:
            return state
    }
}