import * as constants from './constants'
import { fromJS } from 'immutable'

const defaultState = fromJS({
    topicDisplayType: constants.NONE_DISPLAY,
    tagName: null,
    titleName: null,
    titleBlogCount: null,
    tagList: null,
    blogList: null,
    currBlogList: null,
    numPages: 1,
    currPage: 0,
    blogsPerPage: 3,
    yScroll: 0,
    channel: 'en'
})

const getNumPages = (numBlogs, blogsPerPage) => (Math.max(1, Math.ceil(numBlogs / blogsPerPage)))

export default (state=defaultState, action) => {
    switch (action.type) {
        case constants.FILL_TAG_LIST:
            return state.set('tagList', fromJS(action.tagList))
        case constants.FILL_BLOG_LIST:
            const nextBlogList = 
                (state.get('currBlogList') === null ? action.blogList : state.get('currBlogList').toJS())
                .filter((blog) => (blog.channel === state.get('channel')))
            return state.merge({
                blogList: fromJS(action.blogList),
                currBlogList: fromJS(nextBlogList),
                numPages: fromJS(getNumPages(nextBlogList.length, state.get('blogsPerPage')))
            })
        case constants.CHANGE_PAGE_NUM:
            return state.set('currPage', fromJS(action.pageNum))
        case constants.SET_TAG_NAME:
            let fitleredTagList = 
                (state.get('blogList') || fromJS([])).toJS()
                .filter((blog) => (blog.channel === state.get('channel')))
            let topicDisplayType = constants.NONE_DISPLAY
            let tagName = null
            if (action.tagName !== null) {
                fitleredTagList = fitleredTagList.filter((item) => (item.tagList.indexOf(action.tagId) !== -1))
                topicDisplayType = constants.TAG_DISPLAY
                tagName = action.tagName
            }
            return state.merge({
                topicDisplayType: fromJS(topicDisplayType),
                tagName: fromJS(tagName),
                currBlogList: fromJS(fitleredTagList),
                titleName: fromJS(null),
                titleBlogCount: fromJS(null),
                numPages: fromJS(getNumPages(fitleredTagList.length, state.get('blogsPerPage'))),
                currPage: fromJS(0)
            })
        case constants.SEARCH_TITLE:
            const filteredTitleList = 
                (state.get('blogList') || fromJS([])).toJS()
                .filter((blog) => (blog.channel === state.get('channel')))
                .filter((item) => (item.title.toLocaleLowerCase().indexOf(action.title.toLocaleLowerCase()) !== -1))
            return state.merge({
                topicDisplayType: fromJS(constants.TITLE_DISPLAY),
                tagName: fromJS(null),
                titleName: fromJS(action.title),
                titleBlogCount: fromJS(filteredTitleList.length),
                currBlogList: fromJS(filteredTitleList),
                numPages: fromJS(getNumPages(filteredTitleList.length, state.get('blogsPerPage'))),
                currPage: fromJS(0)
            })
        case constants.BLOGS_PER_PAGE:
            const currBlogList = (state.get('currBlogList') || fromJS([])).toJS()
            return state.merge({
                numPages: fromJS(getNumPages(currBlogList.length, action.blogsPerPage)),
                currPage: fromJS(0),
                blogsPerPage: fromJS(action.blogsPerPage)
            })
        case constants.SET_CHANNEL:
            const fitleredChannelList = 
                (state.get('blogList') || fromJS([])).toJS()
                .filter((blog) => (blog.channel === action.channel))
            return state.merge({
                channel: fromJS(action.channel),
                topicDisplayType: fromJS(constants.NONE_DISPLAY),
                tagName: fromJS(null),
                titleName: fromJS(null),
                titleBlogCount: fromJS(null),
                currBlogList: fromJS(fitleredChannelList),
                numPages: fromJS(getNumPages(fitleredChannelList.length, state.get('blogsPerPage'))),
                currPage: fromJS(0)
            })
        case constants.UPDATE_Y_SCROLL:
            return state.set('yScroll', action.yScroll)
        default:
            return state
    }
}