import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    footerIconList: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_FOOTER_ICON_LIST:
            return state.set('footerIconList', fromJS(action.footerIconList))
        default:
            return state
    }
}