import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    currBlogId: null,
    blogContents: {}
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.SET_BLOG_ID:
            return state.set('currBlogId', action.currBlogId)
        case constants.FILL_BLOG_CONTENT_BY_ID:
            const blogContents = state.get('blogContents').toJS()
            blogContents[action.id] = action.blog
            return state.set('blogContents', fromJS(blogContents))
        default:
            return state
    }
}