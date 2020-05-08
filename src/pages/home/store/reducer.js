import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicDisplayType: constants.TAG_DISPLAY,
    tagName: 'Projects',
    authorName: 'PhillipDing',
    authorBlogCount: 1,
    titleName: 'gba',
    titleBlogCount: 1
})

export default (state=defaultState, action) => {
    switch (action.type) {
        default:
            return state
    }
}