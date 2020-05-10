import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicDisplayType: constants.NONE_DISPLAY,
    tagName: null,
    titleName: null,
    titleBlogCount: null,
    tagList: [],
    blogList: []
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_TAG_LIST:
            return state.set('tagList', fromJS(action.tagList))
        case constants.FILL_BLOG_LIST:
            return state.set('blogList', fromJS(action.blogList))
        default:
            return state
    }
}