import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    loginStatus: true,
    editBlogId: null
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SET_ADMIN_LOGIN:
            return state.set('loginStatus', action.adminLogin)
        case constants.SET_EDIT_BLOG_ID:
            return state.set('editBlogId', action.blogId)
        default:
            return state
    }
}