import axios from 'axios'
import * as apis from '../../../constants'
import * as constants from './constants'
import * as appConstants from '../../../store/constants'

const fillTagList = (tagList) => ({
    type: constants.FILL_TAG_LIST,
    tagList
})

const fillBlogList = (blogList) => ({
    type: constants.FILL_BLOG_LIST,
    blogList
})

export const changePageNum = (pageNum) => ({
    type: constants.CHANGE_PAGE_NUM,
    pageNum
})

export const setTagName = (tagName, tagId) => ({
    type: constants.SET_TAG_NAME,
    tagName,
    tagId
})

export const searchTitle = (title) => ({
    type: constants.SEARCH_TITLE,
    title
})

export const updateLayout = (viewportWidth) => ({
    type: appConstants.UPDATE_LAYOUT,
    viewportWidth
})

export const setBlogsPerPage = (blogsPerPage) => ({
    type: constants.BLOGS_PER_PAGE,
    blogsPerPage
})

export const updateYScroll = (yScroll) => ({
    type: constants.UPDATE_Y_SCROLL,
    yScroll
})

export const setChannel = (channel) => ({
    type: constants.SET_CHANNEL,
    channel
})

export const getTagList = () => {
    return async (dispatch) => {
        try {
            const tagList = (await axios.get(apis.TAG_LIST)).data.data
            dispatch(fillTagList(tagList))
        } catch (error) {
            window.alert('Request getTagList() failed. ' + error)
        }
    }
}

export const getBlogList = () => {
    return async (dispatch) => {
        try {
            const blogList = (await axios.get(apis.BLOG_LIST)).data.data
            dispatch(fillBlogList(blogList))
        } catch (error) {
            window.alert('Request getBlogList() failed. ' + error)
        }
    }
}