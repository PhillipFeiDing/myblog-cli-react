import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loginStatus: true
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SET_ADMIN_LOGIN:
            return state.set('loginStatus', action.adminLogin)
        default:
            return state
    }
}