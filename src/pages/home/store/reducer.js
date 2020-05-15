import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicDisplayType: constants.NONE_DISPLAY,
    tagName: null,
    titleName: null,
    titleBlogCount: null,
    tagList: [],
    blogList: [],
    currBlogList: null,
    numPages: 1,
    currPage: 0,
    blogsPerPage: 4
})

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_TAG_LIST:
            return state.set('tagList', fromJS(action.tagList))
        case constants.FILL_BLOG_LIST:
            const nextBlogList = state.get('currBlogList') === null ? action.blogList : state.get('currBlogList').toJS()
            return state.merge({
                blogList: fromJS(action.blogList),
                currBlogList: fromJS(nextBlogList),
                numPages: fromJS(Math.max(1, Math.ceil(nextBlogList.length / state.get('blogsPerPage'))))
            })
        case constants.CHANGE_PAGE_NUM:
            return state.set('currPage', fromJS(action.pageNum))
        case constants.SET_TAG_NAME:
            if (action.tagName === null) {
                const blogList = state.get('blogList').toJS()
                return state.merge({
                    topicDisplayType: fromJS(constants.NONE_DISPLAY),
                    tagName: fromJS(null),
                    titleName: fromJS(null),
                    titleBlogCount: fromJS(null),
                    currBlogList: fromJS(blogList),
                    numPages: fromJS(Math.max(1, Math.ceil(blogList.length / state.get('blogsPerPage')))),
                    currPage: fromJS(0)
                })
            }
            const tagFilterResult = state.get('blogList').toJS().filter((item) => (item.tagList.indexOf(action.tagId) !== -1))
            return state.merge({
                topicDisplayType: fromJS(constants.TAG_DISPLAY),
                tagName: fromJS(action.tagName),
                titleName: fromJS(null),
                titleBlogCount: fromJS(null),
                currBlogList: fromJS(tagFilterResult),
                numPages: fromJS(Math.max(1, Math.ceil(tagFilterResult.length / state.get('blogsPerPage')))),
                currPage: fromJS(0)
            })
        case constants.SEARCH_TITLE:
            const titleFilterResult = state.get('blogList').toJS().filter((item) => (item.title.toLocaleLowerCase().indexOf(action.title.toLocaleLowerCase()) !== -1))
            return state.merge({
                topicDisplayType: fromJS(constants.TITLE_DISPLAY),
                tagName: fromJS(null),
                titleName: fromJS(action.title),
                titleBlogCount: fromJS(titleFilterResult.length),
                currBlogList: fromJS(titleFilterResult),
                numPages: fromJS(Math.max(1, Math.ceil(titleFilterResult.length / state.get('blogsPerPage')))),
                currPage: fromJS(0)
            })
        case constants.BLOGS_PER_PAGE:
            const currBlogList = state.get('currBlogList').toJS()
            return state.merge({
                numPages: fromJS(Math.max(1, Math.ceil(currBlogList.length / action.blogsPerPage))),
                currPage: 0,
                blogsPerPage: action.blogsPerPage
            })
        default:
            return state
    }
}